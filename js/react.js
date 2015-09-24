var Player = React.createClass({
    render: function() {
        return (
            <section className="player">
            <h2> 
                <a href={this.props.player.link}>{this.props.player.name}</a>
            </h2>
            <img src={"assets/"+this.props.player.image} alt={this.props.player.name +"'s Image"}/>
            <h3>{this.props.player.role}</h3>
            <p> {this.props.player.description}<a href={this.props.player.cevoLink}>CEVO Profile</a> </p>
        </section>
        );
    }
});

var PlayerSection = React.createClass({
    render: function() {
      var props = this.props;
      var players = props.players
        .map(function(player){
          return <Player key={player.name} player={player} />;
        });

      return (
        <section>{players}</section>
      );
    }
});

var players = [{
        name : "Tyler \"paradoxmutch\" Crowe",
        link: "https://cevo.com/member/450988/",
        image: "ryan.jpg",
        role: "Leader",
        description: "The leader, founder, and hype man of Team Tilt. A recovering alcoholic with a heart of gold, Tyler can lead even the angriest players to the promise land. Tyler is an expert at spray truck manufacturing and would love to hear your comments and criticism about spray trucks.",
        cevoLink: "https://cevo.com/member/450988/",
    },{
        name : "Ryan \"HI IM RYAN\" Kalkowski",
        link: "https://cevo.com/member/121447/",
        image: "ryan.jpg",
        role: "Entry Fragger",
        description: "Ex-CEVO Main player who had his career cut short by the gym. Now Ryan spends his days getting big and making his signature drink as a bartender, beer. Ryan has the best game sense in the game, but falls apart under when rushed.",
        cevoLink: "https://cevo.com/member/121447/",          
  },{
        name : "Kyle \" K2 \" Anthony",
        link: "https://cevo.com/member/126267/",
        image: "ryan.jpg",
        role: "Awper",
        description: "Know as the wildcard of the team, Kyle can either the best or worst player in the game in any given round. One of the most feared AWPers in AM, but like a TRex can't hit a target standing still.",
        cevoLink: "https://cevo.com/member/126267/",         
  },{
        name : "David \"Jewels400\" Roman",
        link: "https://cevo.com/member/434435/",
        image: "ryan.jpg",
        role: "Guy",
        description: "His is Canadian.",
        cevoLink: "https://cevo.com/member/434435/",         
  },{
        name : "James \"De_Bombinator\" Cortez",
        link: "https://cevo.com/member/408302/",
        image: "ryan.jpg",
        role: "Guy",
        description: "The rookie of the team, but has proven to be a powerful addition. James loves to play matchmaking, which allows him to keep his skill at a high level. James can be found playing MM, often without his team.",
        cevoLink: "https://cevo.com/member/408302/",         
  },{
        name : "Kevin \"ReLeNTL3SS\"",
        link: "https://cevo.com/member/217294/",
        image: "ryan.jpg",
        role: "Guy",
        description: "The most consistent member of the team, and unsurprisingly the safest member as well. Kevin has only ever held B site twice in his life, and likes to play for retakes instead. He is known for his bait and run method of defending sites, leading him to have the highest survival rate on the team.",
        cevoLink: "https://cevo.com/member/217294/",         
  }
];

React.render(<PlayerSection players={players} />, document.getElementById('playerSection'));