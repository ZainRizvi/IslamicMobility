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
        }));
  }
}(module.exports));
