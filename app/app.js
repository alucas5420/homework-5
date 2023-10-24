var GAMES = [
    {
        gameTitle: "Pokèmon Platinum",
        gameThumbImg: "platinum_150.jpg",
        gameFullImg: "",
        gameBriefDescription: "Pokémon Platinum features a new story full of adventure. You will get to meet never-before-seen forms of powerful Pokémon, such as the legendary Giratina’s Origin Forme.  You will also get to explore the Distortion World, a mysterious new world that suddenly appears in the Sinnoh region.",
        gameDescription: "",
        gameRating: " E",
    },
    {
        gameTitle: "Super Mario Galaxy",
        gameThumbImg: "galaxy.png",
        gameFullImg: "",
        gameBriefDescription: "Super Mario Galaxy is a game set in space, where Mario travels through different galaxies to collect Power Stars. These stars are earned by completing missions, defeating a boss, or reaching a particular area. Each galaxy contains planets and structures for the player to explore.",
        gameDescription: "",
        gameRating: " E",
    },
    {
        gameTitle: "A Hat in Time",
        gameThumbImg: "ahit.jpg",
        gameFullImg: "",
        gameBriefDescription: "A Hat in Time is a 3D platformer featuring a little girl who makes hats for wicked powers. In A Hat in Time, you play as a tiny space-travelling girl with a big tophat named Hat Kid. Her adventure is halted when all her fuel, the Time Pieces, are lost and scattered across a nearby planet.",
        gameDescription: "",
        gameRating: " T",
    },
    {
        gameTitle: "Octo Expansion",
        gameThumbImg: "octo.jpg",
        gameFullImg: "",
        gameBriefDescription: "Play as an Octoling in this single-player DLC that features a full-on adventure spanning up to 80 missions starring Agent 8, a character who awakens on a dark subway platform. Navigate this mysterious underground test facility in a desperate battle to reach the surface of Inkopolis and escape.",
        gameDescription: "",
        gameRating: " E10+",
    },
    {
        gameTitle: "Xenoblade 2",
        gameThumbImg: "xeno2.jpg",
        gameFullImg: "",
        gameBriefDescription: "Lost in a sea of clouds, entire civilizations rest on the backs of Titans. As the giant beasts march toward death, the last hope is a scavenger named Rex and his blade named Pyra. Will you be able to find the fabled paradise she calls home? Command a group of Blades and lead them to countless  victories before the world ends.",
        gameDescription: "",
        gameRating: " T",
    },
    {
        gameTitle: "Minecraft",
        gameThumbImg: "minecraft.jpg",
        gameFullImg: "",
        gameBriefDescription: "Minecraft is a game made up mostly of blocks and creatures. You can survive the night or even build a works of art. The choice is up to you!",
        gameDescription: "",
        gameRating: " E10+",
    },
    {
        gameTitle: "Splatoon 3",
        gameThumbImg: "splatoon3.jpg",
        gameFullImg: "",
        gameBriefDescription: "Enter four-on-four battles in this colorful action shooter packed with style and attitude. As a squid-like Inkling, or Octoling, quickly cover your surroundings (and opponents) in ink with crazy weaponry and swim through your own color to sneak and splat.",
        gameDescription: "",
        gameRating: " E10+",
    },
    {
        gameTitle: "Xenoblade 3",
        gameThumbImg: "xeno3.jpg",
        gameFullImg: "",
        gameBriefDescription: "In this game, you get to join Noah and Mio, members of the two opposing nations of Keves and Agnus, on a  journey through a warring world with a dark secret. Traverse massive, fantastical landscapes and master real-time RPG combat as you try to expose the true enemy pulling the strings.",
        gameDescription: "",
        gameRating: " T",
    },
    {
        gameTitle: "Pikmin 2",
        gameThumbImg: "pikmin2.jpg",
        gameFullImg: "",
        gameBriefDescription: "In Pikmin 2, Olimar must return to the Pikmin planet to collect valuable treasure after learning that the company he works for, which is called Hocotate Freight, is on the verge of bankruptcy.",
        gameDescription: "",
        gameRating: " E",
    },
    {
        gameTitle: "Pokèmon Black 2",
        gameThumbImg: "black2.jpg",
        gameFullImg: "",
        gameBriefDescription: "In Pokémon Black 2, players can explore new areas within the Unova region, discover gyms with new leaders and see how everything has changed within the last two years. You can even capture Pokémon not available in the original game versions, and battle opponents from previous game releases.",
        gameDescription: "",
        gameRating: " E",
    },
];

function loadData() {
    $.each(GAMES, function(index, game){
    $("#app").append(` <div class="game-holder">
    <br>
    <h4>${game.gameTitle}</h4>
    <div class="game-image">
        <img src="images/games_thumb/${game.gameThumbImg}" 
        alt="${game.gameTitle}"/>
    </div>
        <div class="brief-rating">
        <br>
            <div class="brief-des">
                ${game.gameBriefDescription}
            </div>
            <div class="rating">Rating:${game.gameRating}</div>
        </div>
</div>`);
    });

   // for(let i = 0; i < GAMES.length; i++) {
    // console.log(GAMES[i].gameTitle);
   // }
}

function initListeners() {}

$(document).ready(function(){
    // initListeners();
    loadData();

});