import { WarehouseHistoryType } from 'src/graphql/generated/graphql';

import {Amount} from '@prisma/client';

import prismaContext from '../lib/prisma/prismaContext';

export const getWarehouseHistoryImportedByWarehouseId = async (warehouseId): Promise<WarehouseHistoryType[]> => prismaContext.prisma.warehouseHistory.findMany({
    select: {
        id: true,
        warehouseId: true,
        dateImport: true,
        amount: {
            select: {
                id: true,
                productId: true,
                warehouseHistoryId: true,
                amount: true,
            }
        }
    },
    where: {
        warehouseId,
        NOT: {
            dateImport: null 
        }
    }
});

export const getWarehouseHistoryExportedByWarehouseId = async (warehouseId): Promise<WarehouseHistoryType[]> => prismaContext.prisma.warehouseHistory.findMany({
    select: {
        id: true,
        warehouseId: true,
        dateExport: true,
        amount: {
            select: {
                id: true,
                productId: true,
                warehouseHistoryId: true,
                amount: true,
            }
        }
    },
    where: {
        warehouseId,
        NOT: {
            dateExport: null 
        }
    }
});

export const createWarehouseHistoryAmount = async ({warehouseHistoryId, productId, amount}): Promise<Amount | null> => {
  return  prismaContext.prisma.amount.create({
    data: { warehouseHistoryId, productId, amount },
  });
};