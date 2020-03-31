<!DOCTYPE html>
<html>
<head>
  <script>
    window.pageData = window.pageData || [];
pageData.push({
 'pageNumber': '1',
 'pageCategory': 'fill-info'
});
</script>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MJ84FXF');</script>
<!-- End Google Tag Manager -->
 <link rel="stylesheet" href="style.css">
<script src=javascript.js> </scri
</head>
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MJ84FXF"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<h2>Let's plan your next trip together</h2>
<div class="bg-img">
  <form action="page2.html" class="container" id="forminfo">
    <h1>Fill out your information</h1>

     <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" class="formfield" pattern="[A-Za-z]{4,30}" required><br>

 <label for="email">Email Id:</label><br>
  <input type="text" id="email" name="email" class="formfield" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required><br>

  <label for="mobile">Mobile:</label><br>
  <input type="text" id="mobile" name="mobile" class="formfield" pattern="[7-9]{1}[0-9]{9}" required><br>

  <label for="dob">Date of Birth:</label><br>
  <input type="date" id="dob" name="dob" class="formfield" required><br>

  <label for="gender">Gender:</label><br>
  <input type="radio" id="male" name="gender" class="formfield" required>
  <label for="male">Male</label>
   <input type="radio" id="female" class="formfield" name="gender">
   <label for="female">Female</label>
    <input type="radio" id="other" class="formfield" name="gender">
    <label for="other">Other</label><br><br>

    <button type="submit" class="btn" id="submit-btn" onclick="validateForm()">Submit</button>
  </form>
</div>

</body>
</html>
