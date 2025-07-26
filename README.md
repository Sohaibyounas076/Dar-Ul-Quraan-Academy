
# 🌙 Dar-Ul-Quraan Academy Website

A professionally designed and responsive website developed for a real client via Fiverr. This project represents an online Quran learning platform offering various courses and services. Built using modern web development technologies including **HTML5**, **CSS3**, **Bootstrap**, **PHP**, and **MySQL**.

![Dar-Ul-Quraan Academy Screenshot]([screenshot.png](https://github.com/Sohaibyounas076/Dar-Ul-Quraan-Academy/blob/main/images/ss.png))

---

## 🔧 Tech Stack

- ✅ HTML5
- ✅ CSS3
- ✅ Bootstrap 4
- ✅ PHP
- ✅ MySQL Database

---

## 📌 Key Features

- Responsive and mobile-friendly layout
- User-friendly design with real content
- Admission form with PHP backend integration
- Dynamic contact form
- Course and services section with custom cards
- Scroll animations and smooth UX

---

## 🗂️ Project Structure

```
Dar-Ul-Quraan-Academy/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   └── (All UI/UX images and icons)
│
├── includes/
│   ├── header.php
│   ├── footer.php
│   └── db.php
│
├── index.php
├── admission.php
├── contact.php
├── upsol.sql                # MySQL database file
├── screenshot.png           # Project preview image
└── README.md
```

---

## 🗃️ Database Setup

1. Open **phpMyAdmin** or your preferred database tool.
2. Create a new database, e.g., `darulquraan`.
3. Import the provided `upsol.sql` file.
4. Configure your database credentials in `includes/db.php`.

```php
// db.php
$host = "localhost";
$user = "root";
$password = "";
$database = "darulquraan";
$conn = mysqli_connect($host, $user, $password, $database);
```

---

## 🚀 How to Run Locally

1. Install [XAMPP](https://www.apachefriends.org/) or [WAMP](https://www.wampserver.com/).
2. Place the project folder in `htdocs`.
3. Start **Apache** and **MySQL**.
4. Visit: `http://localhost/Dar-Ul-Quraan-Academy`
5. Import `upsol.sql` via phpMyAdmin.

---

## 🎯 Use Case

This website was designed for **online Quran learning** with features that support:
- Online Qaida
- Tajweed
- Quran reading
- Quran memorization
- Basic Islam for kids
- Admission/contact form

---

## 📌 About the Developer

**👨‍💻 Sohaib Younas**  
*Frontend Designer | PHP Developer | Shopify Expert*  
[Fiverr Profile](#) | [Portfolio Website](https://sohaibyounas076.github.io/portfolio)

---

## 📄 License

This project was custom-developed for a client. Usage or redistribution without permission is prohibited.

---
