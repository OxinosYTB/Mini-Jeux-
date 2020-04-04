const Discord = require("discord.js")
const client = new Discord.Client()
const webhook = new Discord.WebhookClient("695922018683715664", "dDBPW4kQYiA0e_SOv0Tmm_AcAXySiTsNF7wXQu1o3HNp1e1lDHr0BzWi01LZ_F9PT61Y")

const prefix = ('!')

//instannce
client.on("ready", function() {
client.user.setActivity('Freezaks dev', { type: 'WATCHING' }).catch(console.erreur)
 	 console.log("Je suis connectée")
})

client.on('message', message => {
   if (message.content.startsWith(prefix + 'help')) {
   	let Embed = new Discord.MessageEmbed()
    .setColor("#ff6666")
    .setDescription ("DESCRPTION")
   	.addField("première ligne", "deuxième ligne") 
    .addField("troisième ligne", "quatrièmeligne") 
    .setFooter("Footer")
       message.channel.send(Embed)
       console.log("!help")
    }
    
  if (message.content === "!server") {
    	let server_name = message.guild.name  
        let server_size = message.guild.memberCount;
        message.channel.send("server : " + server_name + "\nPersonnes : " + server_size)
        webhook.send ("je suis un webhook !")
    }
})

const fs = require ("fs");



client.login("NjkzNDE2MjMyNjAyNDM1NjM0.Xoi67A.o0CbufiZDlX9B0NI-WFkfFYhO2o") 
client.commands = new Discord.Collection();
fs.readdir("./Commandes/", (error, f) => {
  if(error) console.log(error); 
  let commandes = f.filter(f=> f.split(".").pop() ==="js");
  if (commandes.length <= 0) return console.log ("aucune commande trouvée !");
  commandes.ForEach(f => {
    let commande = require ("./Commandes/${f}");
    console.log ("${f}" commande chargée !);


    client.commands.set(commande.help.name, commande);
  });
});
fs.readdir ("./Events/", (error, f) => {
  if (error) console.log(error);
  console.log("$(f.lenght) events en chargement");

  f.forEach((f)=> {
    const events = require("/Events/$(f)");
    const event = f.split(".")[0];

    client.on(event, events.bind(null, client));
  })
} )