const template = document.createElement('template');
template.innerHTML = `
<header id="header">
<div class="bar">
    <div class="logo_con">
        <img src="./Assets/wsdalogo6.png" alt="logo" class="logo">
    </div>
    <nav class="topnav" id="myTopnav">
        <div class="nav_lg">
            <li><a href="" class="active">Home</a></li>
            <li><a href="./AboutUs.html" >About</a></li>
            <li><a href="./announcement.html">Bulletin</a></li>
            <li class="min"><a href="">Ministries <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown">
                    <li><a href="./Ministries Pages/AdventurersMinistry.html">Adventurers</a></li>
                    <li><a href="./Ministries Pages/Pathfinders.html">Pathfinders</a></li>
                    <li><a href="./Ministries Pages/Ambassadors.html">Ambassadors</a></li>
                    <li><a href="./Ministries Pages/AdventistYouthMinistry.html">Adventist Youth</a></li>
                    <li><a href="./Ministries Pages/AdventistWomenMinistry.html">Adventist Women Ministries</a></li>
                    <li><a href="./Ministries Pages/AdventistMenMinistry.html">Adventist Men Ministries</a></li>
                    <li><a href="./Ministries Pages/PersonalMinstiries.html">Personal Ministries</a></li>
                    <li><a href="./Ministries Pages/PublishingMinistry.html">Publishing Ministries</a></li>
                    <li><a href="./Ministries Pages/MusicMinistry.html">Music Department</a></li>
                </ul>
            </li>
            <li><a href="./media.html">Media</a></li>    
            <li class="min"><a href="">Resources <i class="fa-solid fa-chevron-down"></i></a>
                <ul class="dropdown">
                    <li><a href="./ResourceCenter.html">Library</a></li>
                    <li><a href="./ChildDedication.html">Child Dedication Form</a></li>
                    <li><a href="./BenevolenceForm.html">Benevolence Form</a></li>
                </ul>
            </li>
            <li><a href="./Contact.html">Contact Us</a></li>
            <button class="btn">Giving</button>
        </div>

        <!---------Mobile Menu----------->
        <input type="checkbox" id="check">
        <label for="check" class="checkbtn">
            <i class="fa-solid fa-bars"></i>
        </label>
        <div class="dropdown_menu">
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./AboutUs.html">About Us</a></li>
                <li><a href="./announcement.html">Bulletin</a></li>
                <li><a href="">Ministries <i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="ex_dropdown">
                        <li><a href="./Ministries Pages/AdventurersMinistry.html">Adventurers</a></li>
                        <li><a href="./Ministries Pages/Pathfinders.html">Pathfinders</a></li>
                        <li><a href="./Ministries Pages/Ambassadors.html">Ambassadors</a></li>
                        <li><a href="./Ministries Pages/AdventistYouthMinistry.html">Adventist Youth</a></li>
                        <li><a href="./Ministries Pages/AdventistWomenMinistry.html">Adventist Women Ministries</a></li>
                        <li><a href="./Ministries Pages/AdventistMenMinistry.html">Adventist Men Ministries</a></li>
                        <li><a href="./Ministries Pages/PersonalMinstiries.html">Personal Ministries</a></li>
                        <li><a href="./Ministries Pages/PublishingMinistry.html">Publishing Ministries</a></li>
                        <li><a href="./Ministries Pages/MusicMinistry.html">Music Department</a></li>
                    </ul>
                </li>
                <li><a href="./media.html">Media</a></li>
                <li><a href="">Resources<i class="fa-solid fa-chevron-down"></i></a>
                    <ul class="ex_dropdown">
                        <li><a href="./ResourceCenter.html">Library</a></li>
                        <li><a href="./ChildDedication.html">Child Dedication Form</a></li>
                        <li><a href="./BenevolenceForm.html">Benevolence Form</a></li>
                    </ul>
                </li>
                <li><a href="./Contact.html">Contact Us</a></li>
            </ul>
        </div>
    </nav>
</div>
</header>

`

document.body.appendChild(template.content);