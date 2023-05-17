/* 1 . Вывести телефоны всех поставщиков, кроме тех, что из Germany и France. */
SELECT Phone 
FROM Suppliers
WHERE Country NOT IN ("Germany", "France")

-- 2. Для товаров до 10 EUR установить категорию 8 и применить наценку в 20%.
UPDATE Products
SET 
	CategoryID=8,
    Price=Price * (1+.2)
WHERE Price <= 10

-- 3. Удалить поставщиков из USA и Germany.
DELETE FROM Suppliers
WHERE Country IN ("USA", "Germany")

-- 4. Добавить два поставщика из Spain с произвольными номерами телефонов.
INSERT INTO Suppliers (SupplierName, ContactName, Address, City, PostalCode, Country, Phone)
VALUES 
	(NULL, NULL, NULL, NULL, NULL, 'Spain', '1111'),
    (NULL, NULL, NULL, NULL, NULL, 'Spain', '2222');

-- 5. Вывести все товары до 20 EUR из категорий 3 и 6 по убыванию цены.
SELECT * 
FROM Products
WHERE 
	Price<=20
    AND
    CategoryID IN (3,6)
ORDER BY Price desc
