-- CreateTable
CREATE TABLE "Warehouse" (
    "warehouseId" SERIAL NOT NULL,
    "maxStockLevel" INTEGER NOT NULL,
    "currentStockLevel" INTEGER NOT NULL,
    "hazardous" BOOLEAN NOT NULL,

    CONSTRAINT "Warehouse_pkey" PRIMARY KEY ("warehouseId")
);

-- CreateTable
CREATE TABLE "Product" (
    "productId" SERIAL NOT NULL,
    "warehouseId" INTEGER NOT NULL,
    "hazardous" BOOLEAN NOT NULL,
    "date" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "Warehouse"("warehouseId") ON DELETE RESTRICT ON UPDATE CASCADE;
