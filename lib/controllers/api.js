'use strict';

/**
 * Get items
 */
exports.items = function(req, res) {
  res.json([
    {
      title : 'Gilbert\'s potoroo',
      description : "Gilbert's potoroo, Potorous gilbertii, sometimes called the \"rat-kangaroo\", is Australia's most endangered animal and one of the world's most endangered mammals. It is a small nocturnal marsupial which lives in small groups or colonies. It has long hind feet and front feet with curved claws which it uses for digging food. Its body has large amounts of fur which helps with insulation, and its fur ranges between brown and grey; the color fading on its belly. This potoroo has a long, thin snout curving downward that it uses to smell its surroundings; this trait is common in all potoroo species. Its eyes appear to bulge out of its face and look as though they are on an angle and its ears are almost invisible, buried under thick fur. Male and female body types are very similar and are both within the same size range. Adult females range in size from 708–1205 g (including pouch young where present). Adult males range in size from 845–1200 g.[1] The current estimated population is a sparse seventy individuals.[2] It was thought to be extinct until its rediscovery in 1994.[3] Gilbert's potoroo is Australia's most endangered marsupial. The only population is found in Two People's Bay National Park in Western Australia."
    }, {
      title : 'Long-footed potoroo',
      description : "The long-footed potoroo (Potorous longipes) is a species of potoroo found in southeastern Australia, in a small area around the coastal border between New South Wales and Victoria. It was discovered in 1967 when an adult male was caught in a dog trap in the forest southwest of Bonang, Victoria.[3] It is classified as endangered.[2]"
    }, {
      title : 'Broad-faced potoroo',
      description : "The broad-faced potoroo (Potorous platyops) is an extinct species of marsupial that once lived in Australia. The first specimen was collected in 1839 and described by John Gould in 1844, but even then it was rare and only a handful of specimens were ever collected, the last in 1875. Subfossil remains indicate that it originally had an extensive distribution from the semiarid coastal districts of South Australia to the Western Australian coast, and possibly as far north as North West Cape."
    }, {
      title : 'Long-nosed potoroo',
      description : "The long-nosed potoroo (Potorous tridactylus*) is a species of Australian potoroo. It is a marsupial that is generally known as the rat-kangaroo. (Potorous tridactylus*) contains two subspecies, the (Potorous tridactylus tridactylus*) which resides in Mainland Australia and (Potorous tridactylus apicalis*)which resides in Tasmania and tends to have lighter fur than the (Potorous tridactylus tridactylus*).[3] At first glance the long-nosed potoroo with its pointed nose and grey-brown fur looks very much like a bandicoot — that is until it hops away with its front feet tucked into its chest; revealing its close relationship with the kangaroo family. The long-nosed potoroo exhibits many morphological specializations such as an elongated pointed rostral region (nose), erect ears, large eyes, claws for digging, and long robust hind legs.[4] It is only a small marsupial with a body length between 340mm and 380mm, and a semiprehensile tail length from 150mm to 240mm.[5]"
    }
  ]);
};