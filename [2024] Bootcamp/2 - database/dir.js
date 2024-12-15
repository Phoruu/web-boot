/*



        ************************************
                  Database   
        ************************************

        Important Note/s!
        1.) 






        // ====================================
        //             Section 31
        // ====================================
        //              Databases
        // ====================================

        1.) Databases Explained: SQL vs NoSQl

            - Data refreshes when reboot

                Data Storage
                - permanent state of memory

                Types of Databases
                1.) SQL DB (Relational Database)
                    - Structured Query Language
                    - data are stored in tables (structured in tables)
                    - Oracle DB, PostgreSQL, MySQL, SQLite, MariaDB, etc.

            
                2.) NoSQL DB 
                    - Not/Not only Structured Query Language
                    - characterized by one (1) major advantage : flexibility
                    - not obliged to follow the structure that is set
                    - addresses the pain in SQL
                        - SQL not the most intuitive, requires learning
                        - Flexibility - no more planning ahead of time
                        - Scalability - scale horizontally - more field
x                                     - scale vertically   - more records
                    - e.g. JSON format 
                                    ----> can change the format of the structure
                    - MongoDB, Redis, Amazon DynamoDB


                SQL - traditional, PC guy, oldschool
                NoSQL - cool, hip, knows how to make coffee well, new kid on the block

                SQL remains to be the most used (PostgreSQL)

                PostgreSQL
                - free
                - scalable
                - efficient


        // ====================================
        //             Section 32
        // ====================================
        //                SQL
        // ====================================


        2.) SQL Commands: CREATE Table and INSERT Data

            Keywords: SELECT, FROM, CREATE, TABLE

            Create
            Read            CRUD
            Update
            Destroy


            SQL Primary Keys
            - allows a particular column to unique identify a record in a database
            - anchor tag
            - e.g. PRIMARY KEY (id_number)



            NOT NULL

            Insert INTO


        3.) SQL Commands: READ, SELECT, and WHERE

            READ
            - SELECT keyword
            - (*) - everything
            - WHERE
                SELECT column1, column2...
                FROM table_name
                WHERE conditions;

            - refer documentation to modify WHERE (operations)


        4.) Updating Single Values and Adding Columns in SQL

            UPDATE
            -   UPDATE
                UPDATE table_name
                SET column1 = value1, column2 = value2, ...
                WHERE condition;

            ALTER TABLE
            -   ALTER
                ALTER TABLE table_name
                ADD column_name datatype;

        5.) SQL Commands: DELETE

            DELETE
            - DELETE
                DELETE FROM table_name
                WHERE conditions


        6.) Understanding SQL Relationships, Foreign Keys, and Inner Joins


            RELATIONSHIPS
                Foreign Key
                - a field that will point to a particular record in a SPECIFIC TABLE
                    FOREIGN KEY (curr_item) REFERENCES other_item (primary_key)


            JOIN
            - Select from one table and another tbble to join the data

            -   SELECT column_name(s)
                FROM table1
                INNER JOIN table 2 ON table1.column_name = table2.column_name


        // ====================================
        //             Section 33
        // ====================================
        //              PostgreSQL
        // ====================================

        



        // ====================================
        //   Section 31 : Databases
        // ====================================


            SQL DB (Relational)

            e.g.
x               POST TABLE  |   title   |   date   |  author
x                           |   ~~~~~   |   ~~~~   |  ~~~~~~   <------
x                                                                    |
x                                                                    |  LINK 
x               USER TABLE  |    name   |   pass    | email          |
x                           |    ~~~~   |   ~~~~    | ~~~~~    <------

        // ====================================
        //   Section 32 : SQL
        // ====================================
            
            CREAD

                CREATE TABLE product(
                        id INT,
                        name STRING,
                        price FLOAT,
                    );



            UPDATE
            -   INSERT INTO product VALUES (2, 'ball point' , 1.150)
            -   INSERT INTO product (id, name) VALUES (4, 'correction tape')

            READ
            - SELECT id, price FROM product 
            - SELECT * FROM product WHERE id=1 
            - refer documentation to modify WHERE (operations)



            UPDATE v2
            - UPDATE product
              SET price = 1.35
              WHERE id = 4
            
            - ALTER TABLE product
              ADD stock INT

            -   UPDATE product
                SET stock = 4
                WHERE id = 4



            DELETE
            -   DELETE FROM product
                where id = 2




            TABLE RELATIONSHIPS
            CREATE TABLE orders(
                    id INT NOT NULL,
                    order_Number INT,
                    customer_id INT,
                    product_id INT,
                    PRIMARY KEY (id)
                    FOREIGN KEY (customer_id) REFERENCES customer (id)
                    FOREIGN KEY (product_id) REFERENCES product (id)
                    )

            JOIN
                INNER JOIN

                SELECT orders.order_Number, customer.customer_name
                FROM orders
                INNER JOIN customer ON orders.customer_id = customer.id


                SELECT orders.order_Number, product.name, product.price, product.stock
                FROM orders
                INNER JOIN product ON orders.product_id = product.id

        // ====================================
        //   Section 33 : PostgreSQL
        // ====================================











*/

/*




        ************************************
                       
        ************************************


-->

<!--  
       
        // ====================================
        //             Section 
        // ====================================
        //        
        // ====================================

       


        // ====================================
        //             Section 
        // ====================================
        //         
        // ====================================

        


        // ====================================
        //             Section 
        // ====================================
        //         
        // ====================================

        



        // ====================================
        //   Section  : 
        // ====================================

        

        // ====================================
        //   Section  : 
        // ====================================
            
            

        // ====================================
        //   Section  :
        // ====================================


*/





