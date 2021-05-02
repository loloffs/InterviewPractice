SELECT order.id, customer.name
FROM order
JOIN customer ON  order.customer_id=customer.id 



