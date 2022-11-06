import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { parse, printSchema } from 'graphql';

import { codegen } from '@graphql-codegen/core';
import { Types } from '@graphql-codegen/plugin-helpers';
import * as schemaAstPlugin from '@graphql-codegen/schema-ast';

import schema from './graphql/schema';
import prismaContext from './lib/prisma/prismaContext';

const __filename = fileURLToPath(import.meta.url);

async function performCodegen(options: Types.GenerateOptions): Promise<void> {
  const output = await codegen(options);
  fs.writeFile(
    path.join(path.dirname(__filename), '/graphql/generated/', options.filename),
    output,
    () => {
      console.log('Outputs generated!');
    }
  );
}

// eslint-disable-next-line import/prefer-default-export
export async function performAstCodegen(): Promise<void> {
  const options: Types.GenerateOptions = {
    config: {
      numericEnums: true,
      contextType: prismaContext,
      useIndexSignature: true,
    },
    documents: [],
    filename: 'schema.graphql',
    schema: parse(printSchema(schema)),
    plugins: [{ 'schema-ast': {} }],
    pluginMap: {
      'schema-ast': schemaAstPlugin,
    },
  };
  performCodegen(options);
}
