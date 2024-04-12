const template = document.createElement('template');
template.innerHTML = `
<footer id="footer">
<section class="connect">
    <h1>ADDRESS</h1>
    <div class="address">
        <h2>Email</h2>
        <p>kahawawendanisda@gmail.com</p>
        <h2>Call</h2>
        <p>+2547167943663</p>
        <h2>Mailing Address</h2>
    </div>
</section>
<section class="service">
    <h1>Service Times</h1>
    <div class="service_times">
        <p>Every Sabbath (Saturday)</p>
        <p>8:00 am - Sabbath School</p>
        <p>11:00am - Divine Worship</p>
        <p>Afternoon - Bible Study</p>
        <div class="mid_week">
            <h3>Wednesdays & Fridays</h3>
            <p>5:30pm - Prayer Meeting</p>
        </div>
    </div>
</section>
<section class="links">
    <h1>Quick Links</h1>
    <div class="quick_Links">

    </div>
</section>
</footer>

<!------Copyright------------>
<section class="copyright">
<div>
    <i class="fa-regular fa-copyright"></i>
</div>
<h5>Kahawa Wendani Sda Church 2024.</h5>
</section>
`
document.body.appendChild(template.content);