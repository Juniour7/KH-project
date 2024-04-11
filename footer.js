const template = document.createElement('template');
template.innerHTML = `
<!------------------Footer-------------------->
<footer id="footer">
    <div class="bottom">
        <div class="mission">
            <h1 class="footer_title">Mission</h1>
            <p class="footer_txt">The Mission of the Seventh-day Adventist Church is to proclaim to all the people the Everlasting Gospel in the context of the Three Angels Message of Revelation 14:6-12 leading them to accept Jesus as personal Saviour and to unite with His church, and nurturing them in preparation for His soon return.</p>
        </div>
        <div class="contact_icon">
            <h1 class="footer_title">Contact Us</h1>
            <span>
                <i class="fa-solid fa-location-dot"></i>
                <h4>Location: Kahawa Wendani Along Thika Road</h4>
            </span>
            <span>
                <i class="fa-solid fa-phone"></i>
                <h4>0716794363</h4>
            </span>
            <span>
                <i class="fa-regular fa-envelope"></i>
                <h4>giftmomanyi97@gmail.com</h4>
            </span>
        </div>
        <div class="location">
            <h1 class="footer_title">Visit Us</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9414528219995!2d36.92801547413191!3d-1.2012572355373485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3fc0686896b5%3A0x39495f1958453491!2sKahawa%20Wendani%20SDA!5e0!3m2!1sen!2ske!4v1706077873374!5m2!1sen!2ske" width="300" height="200" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</footer>

<!------Copyright------------>
<section class="copyright">
    <div>
        <i class="fa-regular fa-copyright"></i>
    </div>
    <h5>Kahawa Wendani Sda Church 2024. All Rights Reserved</h5>
</section>
`
document.body.appendChild(template.content);