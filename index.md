<!DOCTYPE html>
<html>
<head>
  <script>
    dataLayer = [];
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
})(window,document,'script','dataLayer','GTM-KBXNWM9');</script>
<!-- End Google Tag Manager -->

 <link rel="stylesheet" href="style.css">
<script src=javascript.js> </script>
</head>
<body>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KBXNWM9"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<h2>Let's plan your next trip together</h2>
<div class="bg-img">
  <form action="page2.html" class="container" id="forminfo">
    <h1>Fill out your information</h1>

    <label for="name">Name:</label><br>
  <input type="text" id="name" name="name" class="formfield" pattern="[A-Za-z]{4,30}" required onmousedown="ga('send', 'event', 'form field track', 'click', 'Name');"><br>

 <label for="email">Email Id:</label><br>
  <input type="text" id="email" name="email" class="formfield" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required onclick="ga('send', 'event', 'form field track', 'click', 'email');" ><br>

  <label for="mobile">Mobile:</label><br>
  <input type="text" id="mobile" name="mobile" class="formfield" pattern="[7-9]{1}[0-9]{9}" required onclick="ga('send', 'event', 'form field track', 'click', 'mobile');"><br>

  <label for="dob">Date of Birth:</label><br>
  <input type="date" id="dob" name="dob" class="formfield" required onclick="ga('send', 'event', 'form field track', 'click', 'Date of birth');"><br>

  <label for="gender">Gender:</label><br>
  <input type="radio" id="male" name="gender" class="formfield" required onclick="ga('send', 'event', 'form field track', 'click', 'Gender:male');">
  <label for="male">Male</label>
   <input type="radio" id="female" class="formfield" name="gender" onclick="ga('send', 'event', 'form field track', 'click', 'Gender:female');" >
   <label for="female">Female</label>
    <input type="radio" id="other" class="formfield" name="gender" onclick="ga('send', 'event', 'form field track', 'click', 'Gender:other');">
    <label for="other">Other</label><br><br>

    <button type="submit" class="btn" id="submit-btn" onclick="ga('send', 'event', 'submit button', 'click', 'submit');">Submit</button>
  </form>
</div>

</body>
</html>
