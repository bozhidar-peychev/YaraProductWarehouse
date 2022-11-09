-- CreateTable
CREATE TABLE "Warehouse" (
    "id" TEXT NOT NULL,
    "maxStockLevel" INTEGER DEFAULT 0,
    "currentStockLevel" INTEGER DEFAULT 0,
    "hazardous" BOOLEAN,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "productId" TEXT NOT NULL,
    "warehouseId" TEXT,
    "productName" TEXT,
    "hazardous" BOOLEAN,
    "amount" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "WarehouseHistory" (
    "id" TEXT NOT NULL,
    "warehouseId" TEXT,
    "dateImport" INTEGER,
    "dateExport" INTEGER,
    "amountId" INTEGER,

    CONSTRAINT "WarehouseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Amount" (
    "id" TEXT NOT NULL,
    "productId" TEXT,
    "amount" INTEGER,
    "warehouseHistoryId" TEXT,

    CONSTRAINT "Amount_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarehouseHistory" ADD CONSTRAINT "WarehouseHistory_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Amount" ADD CONSTRAINT "Amount_warehouseHistoryId_fkey" FOREIGN KEY ("warehouseHistoryId") REFERENCES "WarehouseHistory"("id") ON DELETE SET NULL ON UPDATE CASCADE;
