/* 1 . Вывести стоимость и название двух самых дешевых товаров из Germany. */
SELECT 
	Products.ProductName,
    Products.Price
FROM 
	Products
JOIN Suppliers ON Products.SupplierID=Suppliers.SupplierID
WHERE 
	Suppliers.Country="Germany"
ORDER BY Price ASC
LIMIT 2


-- 2. Вывести ко-во и сред/стоимость товаров из USA.
SELECT 
	COUNT(*) AS Quantity,
	AVG(Products.Price) AS AVG_price
FROM 
	Products
JOIN Suppliers ON Products.SupplierID=Suppliers.SupplierID
WHERE 
	Suppliers.Country="USA"


-- 3. Вывести ко-во заказов, которое компания Speedy Express доставила в Brazil.
SELECT 
	COUNT(*) AS Quantity
FROM 
	Orders
JOIN Shippers ON Orders.ShipperID=Shippers.ShipperID
JOIN Customers ON Orders.CustomerID=Customers.CustomerID
WHERE 
	Shippers.ShipperName="Speedy Express"
    AND
    Customers.Country="Brazil"


-- 4. Вывести среднюю стоимость проданного в Germany товара.
SELECT 
	AVG(Products.Price) AS avg_price_to_Germany
FROM 
	Products
JOIN OrderDetails ON Products.ProductID=OrderDetails.ProductID
JOIN Orders ON OrderDetails.OrderID=Orders.OrderID
JOIN Customers ON Orders.CustomerID=Customers.CustomerID
WHERE
    Customers.Country="Germany"

-- 5. У всех поставщиков не из Germany очистить номер телефона.
UPDATE
	Suppliers
SET 
	Suppliers.Phone=""                -- почему так выдает ошибку??? Надо просто Phone=""
WHERE
    --Suppliers.Country NOT IN ("Germany")
    --NOT Suppliers.Country="Germany"
    Suppliers.Country !="Germany"
