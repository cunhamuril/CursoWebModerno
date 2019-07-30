SELECT 
    regiao as 'Região',
    sum(populacao) as Total -- sum é soma
FROM `estados`
GROUP BY regiao
ORDER BY Total desc;

SELECT     
    sum(populacao) as Total
FROM `estados`;

SELECT     
    avg(populacao) as Total -- avg é média
FROM `estados`;