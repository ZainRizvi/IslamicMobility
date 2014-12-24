(function(seed) {

  var book = require('../common/entities/book.js')

  seed.data = new Array();
  for (var i = 0; i < 3; i++)
  {
    seed.data.push(
      new book(
        "The Probe into the History of Ashura",
        "Dr. Ibrahim Ayati",
        {
          image: "http://www.islamicmobility.com/book201.jpg",
          epub: "http://islamicmobility.com/epub/A_Probe_Into_Historyf_Ashura.epub",
          pdf: "http://islamicmobility.com/pdf/Probe%20Into%20History%20Ashura.pdf",
          mobi: "http://www.feedbooks.com/userbook/28568.mobi",
          description: "'Performing azadari-e-Imam Hussain is a part & portion of His mission because declaring the zulm (oppression) of zalim (oppressor) and mazloom (oppressed) is exactly the Deen.' Syed Abul Qasim Moosavi Al Khoie"
        }));
    seed.data.push(
     new book(
        "Historical Sermons",
        "Islamic Mobility",
        {
          image: "http://www.islamicmobility.com/book243.jpg",
          epub: "http://islamicmobility.com/epub/Historical%20Sermons%20Imam%20Hussain_Mola%20Abbas_Syeda%20Sakina_Syeda%20Zainab.epub",
          pdf: "http://islamicmobility.com/pdf/Historical%20Sermons%20Imam%20Hussain%20Mola%20Abbas%20bibi%20Sakina%20syeda%20Zainab.pdf",
          mobi: "http://www.feedbooks.com/userbook/31220.mobi",
          description: "This based principally on the account of Abu Mikhnaf (132 AH) preserved in the writings of al‑Tabari. Discusses events that culminated in the murder of the Prophet's grandson."
        }));
    seed.data.push(
      new book(
        "A Commentary on Prayer",
        "Muhsin Qaraati",
        {
          image: "http://www.islamicmobility.com/book302.jpg",
          epub: "http://islamicmobility.com/epub/A_Probe_Into_Historyf_Ashura.epub",
          pdf: "http://islamicmobility.com/pdf/Probe%20Into%20History%20Ashura.pdf",
          mobi: "http://www.feedbooks.com/userbook/28568.mobi",
          description: "Allamah Majlesi, in Behar stated Seyed Ibn Tavoos, 'I have written the book al-Malhoof ala Qatlal Tofouf who reads will know its preferences over similar books'. The original title was Malhoof old manuscripts its Lohoof"
        }));
    seed.data.push(
      new book(
        "The Revolution of Imam Al Husayn",
        "Shk Mohd Mehdi Shams Al Amali",
        {
          image: "http://www.islamicmobility.com/book408.jpg",
          epub: "http://islamicmobility.com/epub/The_Revolution_of_Imam_Husayn_ItsImpact_onthe_Consciousness_fMuslim_Society.epub",
          pdf: "http://islamicmobility.com/pdf/The_Revolution_of_Imam_Husayn_ItsImpact_onthe_Consciousness_fMuslim_Society.pdf",
          mobi: "http://islamicmobility.com/mobi/The_Revolution_of_Imam_Husayn_ItsImpact_onthe_Consciousness_fMuslim_Society.mobi",
          description: "An attempt to reconstruct tradition of historical writing about martyrdom of Imam al‑Husayn. The narrative into 8 distinct sec. by I.K.A Howard Edinburg University) Subsections added for Ease of Reading"
        }));
    seed.data.push(
      new book(
        "The Probe into the History of Ashura",
        "Dr. Ibrahim Ayati",
        {
          image: "http://www.islamicmobility.com/book292.jpg",
          epub: "http://islamicmobility.com/epub/A_Probe_Into_Historyf_Ashura.epub",
          pdf: "http://islamicmobility.com/pdf/Probe%20Into%20History%20Ashura.pdf",
          mobi: "http://www.feedbooks.com/userbook/28568.mobi",
          description: "An analytic look at the historic account of the invasion and horrific plunder of the holy city of Medina in the year 63 AH after the event of Karbala - Iraq"
        }));
    seed.data.push(
      new book(
        "The Probe into the History of Ashura",
        "Dr. Ibrahim Ayati",
        {
          image: "http://www.islamicmobility.com/book296.jpg",
          epub: "http://islamicmobility.com/epub/A_Probe_Into_Historyf_Ashura.epub",
          pdf: "http://islamicmobility.com/pdf/Probe%20Into%20History%20Ashura.pdf",
          mobi: "http://www.feedbooks.com/userbook/28568.mobi",
          description: "The Perpetual Guidance, Ziyarat ‘Ashura of Imam Husayn. This text is a gateway to understanding the essence & ettiquete of Ziyarat, which has then been singled verse by verse & has been explained in detail."
        }));
    seed.data.push(
      new book(
        "The Probe into the History of Ashura",
        "Dr. Ibrahim Ayati",
        {
          image: "http://www.islamicmobility.com/book295.jpg",
          epub: "http://islamicmobility.com/epub/A_Probe_Into_Historyf_Ashura.epub",
          pdf: "http://islamicmobility.com/pdf/Probe%20Into%20History%20Ashura.pdf",
          mobi: "http://www.feedbooks.com/userbook/28568.mobi",
          description: "40 short and simple ahadith have been selected from various sources. Therefore easy to understand & memorise. It is envisaged that this booklet will be useful for zakireen, madrasah teachers and students."
        }));
  }
}(module.exports));
