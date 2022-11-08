import { WarehouseHistory } from '@prisma/client';

import prismaContext from '../lib/prisma/prismaContext';

export const getWarehouseHistoryImportedByWarehouseId = async (warehouseId): Promise<WarehouseHistory[]> => prismaContext.prisma.warehouseHistory.findMany({
    where: {
        warehouseId,
        NOT: {
            dateImport: null 
        }
    }
});

export const getWarehouseHistoryExportedByWarehouseId = async (warehouseId): Promise<WarehouseHistory[]> => prismaContext.prisma.warehouseHistory.findMany({
    where: {
        warehouseId,
        NOT: {
            dateExport: null 
        }
    }
});
