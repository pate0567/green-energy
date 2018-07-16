(function () {
   


/*
-------------------------------------
START CODING REVEAL-HIDE MAIN-CONTENT
-------------------------------------
*/

var buttons = document.querySelectorAll("main span");

var contents = [
        '<figure class="energy-content">' + '<img src="./img/wind-power.jpg" alt="Wind power">' +
            '<figcaption>Airflows can be used to run wind turbines. Modern utility-scale wind turbines range from around 600 kW to 5 MW of rated power, although turbines with rated output of 1.5–3 MW have become the most common for commercial use. The largest generator capacity of a single installed onshore wind turbine reached 7.5 MW in 2015. The power available from the wind is a function of the cube of the wind speed, so as wind speed increases, power output increases up to the maximum output for the particular turbine.[41] Areas where winds are stronger and more constant, such as offshore and high altitude sites, are preferred locations for wind farms. Typically full load hours of wind turbines vary between 16 and 57 percent annually, but might be higher in particularly favorable offshore sites.</figcaption>' +
        '</figure>',

         '<figure class="energy-content">' + '<img src="./img/hydropower.jpg" alt="Hydropower">' +
            '<figcaption>In 2015 hydropower generated 16.6% of the worlds total electricity and 70% of all renewable electricity.[45] Since water is about 800 times denser than air, even a slow flowing stream of water, or moderate sea swell, can yield considerable amounts of energy. </figcaption>' +
        '</figure>',

        '<figure class="energy-content">' + '<img src="./img/solar-energy.jpg" alt="Solar energy">' +
            '<figcaption>Solar energy, radiant light and heat from the sun, is harnessed using a range of ever-evolving technologies such as solar heating, photovoltaics, concentrated solar power (CSP), concentrator photovoltaics (CPV), solar architecture and artificial photosynthesis.[48][49] Solar technologies are broadly characterized as either passive solar or active solar depending on the way they capture, convert and distribute solar energy. Passive solar techniques include orienting a building to the Sun, selecting materials with favorable thermal mass or light dispersing properties, and designing spaces that naturally circulate air. Active solar technologies encompass solar thermal energy, using solar collectors for heating, and solar power, converting sunlight into electricity either directly using photovoltaics (PV), or indirectly using concentrated solar power (CSP).</figcaption>' +
        '</figure>'
];

var container = document.querySelector(".container");
container.innerHTML = contents[0];

function handleClick(ev) {
    ev.preventDefault();
    var target = ev.target;

    for (j = 0; j < buttons.length; j++) {
        if (buttons[j].hasAttribute("id")) {
            buttons[j].removeAttribute("id");
        }
    }

    if (ev.target.innerHTML === "Wind power") {
        container.innerHTML = contents[0];
    } else if (ev.target.innerHTML === "Hydropower") {
        container.innerHTML = contents[1];
    } else {
        container.innerHTML = contents[2];
    }

    ev.target.setAttribute("id", "active");
}

for (j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener("click", handleClick);
}

}());