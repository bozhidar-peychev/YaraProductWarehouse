-- CreateTable
CREATE TABLE "Warehouse" (
    "id" SERIAL NOT NULL,
    "maxStockLevel" INTEGER DEFAULT 0,
    "currentStockLevel" INTEGER DEFAULT 0,
    "hazardous" BOOLEAN,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "productId" SERIAL NOT NULL,
    "warehouseId" INTEGER,
    "productName" TEXT,
    "hazardous" BOOLEAN,
    "amount" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- CreateTable
CREATE TABLE "WarehouseHistory" (
    "id" SERIAL NOT NULL,
    "warehouseId" INTEGER,
    "dateImport" INTEGER,
    "dateExport" INTEGER,
    "amount" INTEGER,

    CONSTRAINT "WarehouseHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WarehouseHistory" ADD CONSTRAINT "WarehouseHistory_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
