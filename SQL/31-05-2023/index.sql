/* 1 . Выполнить расчет З/П менеджеров за весь период заказов из расчета ставки в 10%. */
SELECT
	Employees.EmployeeID,
    Employees.LastName,
    Employees.FirstName,
    SUM(OrderDetails.Quantity * Products.Price) * 0.1 AS Manager_salary
FROM
	Orders
JOIN OrderDetails ON Orders.OrderID=OrderDetails.OrderID
JOIN Products ON OrderDetails.ProductID=Products.ProductID
JOIN Employees ON Orders.EmployeeID=Employees.EmployeeID
GROUP BY Orders.EmployeeID


-- 2. Вывести сотрудников, у которых ко-во заказов менее 20.
SELECT
	Employees.EmployeeID,
    Employees.LastName,
    Employees.FirstName,
    COUNT(*) AS Total_orders
FROM
	Orders
JOIN OrderDetails ON Orders.OrderID=OrderDetails.OrderID
JOIN Products ON OrderDetails.ProductID=Products.ProductID
JOIN Employees ON Orders.EmployeeID=Employees.EmployeeID
GROUP BY Orders.EmployeeID
HAVING Total_orders<=20


-- 3. Вывести названия компаний-перевозчиков и сколько заказов каждая из них доставила.
SELECT
	Shippers.ShipperName,
    COUNT(*) AS Total_orders
FROM
	Orders
JOIN Shippers ON Orders.ShipperID=Shippers.ShipperID
GROUP BY Orders.ShipperID


-- 4. Для клиентов из Mexico очистить контактные имена.
UPDATE
	Customers
SET
	ContactName=""
WHERE
	Customers.Country="Mexico"


