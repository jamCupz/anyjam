const Discord = require('discord.js');

var anyCat = ["https://cdn.discordapp.com/attachments/965637142816645140/990002413710749717/unknown.png", "https://i.pinimg.com/originals/b2/7e/ed/b27eedb6571d9d2828ad7438a51a3739.jpg", "https://data.whicdn.com/images/362761219/original.jpg", "https://yt3.ggpht.com/ytc/AKedOLTFAGksfCl81CRJI5WOjPyLcVk5SjnHR_QP-hY=s900-c-k-c0x00ffffff-no-rj", "https://i.pinimg.com/originals/91/7b/cd/917bcdbfa5f9a5af50512eba8f54a0dc.jpg", "https://data.whicdn.com/images/342073256/original.jpg", "https://i.pinimg.com/736x/6c/bd/62/6cbd62ea917641fb218af315f56a0cf8.jpg", "https://i.pinimg.com/736x/5c/4e/28/5c4e28c8993be95ae616aaf6fb774cda.jpg", "https://dk2dv4ezy246u.cloudfront.net/widgets/sSoADwirjAwY_large.jpg", "https://i.pinimg.com/564x/bf/c4/33/bfc433c05ee419f956fbc1112d85943d.jpg", "https://stickerly.pstatic.net/sticker_pack/eG0KpEt7FVP9LVNvddFzg/9YZ68L/13/88cc0337-26c5-4538-a2ed-e16b6ef2a51b.png", "https://exploringbits.com/wp-content/uploads/2022/01/cat-pfp-9.jpg?ezimgfmt=rs:352x338/rscb3/ng:webp/ngcb3", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn_X6uOXD8NIyS64aX0MlaDZ5-6wWk7K4Ee_SFfo_dvI2DCOWAAtmZM7aVdjzSgQE_lGQ&usqp=CAU", "https://i.pinimg.com/736x/da/55/80/da55802ca99bbb27aa8e0519346cba54.jpg", "https://i.pinimg.com/originals/36/2b/04/362b0460a0b7fcd64b60e8637cf060ed.jpg", "https://i.pinimg.com/736x/ce/85/7a/ce857a587e72968fcf5ee23b9c1d2a9a.jpg", "https://i.pinimg.com/736x/f4/7d/92/f47d92669b96d5ead56171fbba409de0.jpg", "https://i.pinimg.com/736x/33/2c/d3/332cd33b9425fc4026ab2c568160e070.jpg", "https://i.pinimg.com/originals/9f/aa/a1/9faaa1fedc94c355a4256ba6207c7714.png"];

var anyDog = ["https://i.pinimg.com/736x/6c/a5/a7/6ca5a7efff600deda95e0719551e4c0d.jpg", "https://i.pinimg.com/736x/ee/f6/49/eef64900c87ee7ac2c57ebc2ef150fed.jpg", "https://i.pinimg.com/564x/ea/ee/c7/eaeec7028877ba29b665b0331c1f25ae.jpg", "https://i.pinimg.com/564x/e2/0f/9b/e20f9b7be8638fd1f739676f8a3e4343.jpg", "https://i.pinimg.com/736x/a8/6a/52/a86a52279ba20dca9a8ee15d6abbcfad.jpg", "https://64.media.tumblr.com/8093f48d41140c8dc410eb278e35599d/tumblr_oo2n9a4XcN1sqnsado1_r1_500.jpg", "https://i.pinimg.com/564x/da/35/f3/da35f35cd30970d941ba689f5884d340.jpg", "https://64.media.tumblr.com/c5b513e7b98ca4a6e9f52c1d680b43eb/1e596507a8df5262-54/s1280x1920/c4f8a5f7a7918239e1a821fa85a1fd5bc4330b0e.jpg", "https://images.unsplash.com/photo-1615751072497-5f5169febe17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80", "https://i.pinimg.com/originals/2f/c0/60/2fc060ca0444112b5c2e6dfebccfcbc4.jpg", "https://i.pinimg.com/736x/76/9e/7c/769e7c137f64d3bd70c57846bb7801a9.jpg", "https://i.pinimg.com/736x/2e/82/95/2e8295a04265cab5c2dd992a40a2c21f.jpg", "https://i.pinimg.com/564x/e2/95/9b/e2959b918a3ec506b76bb87133151491.jpg", "https://i.pinimg.com/originals/ea/5a/1e/ea5a1eb7d9f1bca19e6a3280780a240f.jpg", "https://data.whicdn.com/images/316781399/original.jpg", "https://data.whicdn.com/images/297463805/original.jpg", "https://i.pinimg.com/736x/b4/c1/19/b4c119640398875a9966506ee7ee3e89.jpg", "https://i.pinimg.com/originals/18/47/1d/18471dde83c567480d3fa56d8fa29706.jpg", "https://i.pinimg.com/originals/4a/72/ef/4a72ef1f75791a7082dc8f4cecc3a6c5.jpg", "https://i.pinimg.com/736x/e8/02/1c/e8021ca25ab506dd6e7409f02a00545b.jpg", "https://i.pinimg.com/736x/13/7e/ff/137eff78a87c8919a4eed46505c06f75.jpg"];

function randomDog() { 
   return anyDog[Math.floor(Math.random * anyDog.length)] 
}

var anyGreeting = ["Hola", "Bonjour", "Wasup", "Hi", "What's up", "Buenas", "Ciao", "👋"];

var anyFarewell = ["Chao", "Adios" ,"Bye", "Goodbye", "Adieu", "Addio"];

var any = [""];

module.exports = {
    anyCat,
    anyDog,
    anyGreeting,
    anyFarewell,
    randomDog
}