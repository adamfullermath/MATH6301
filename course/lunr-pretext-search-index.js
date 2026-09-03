var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "course-notes",
  "level": "1",
  "url": "course-notes.html",
  "type": "Chapter",
  "number": "",
  "title": "Course Notes",
  "body": " Course Notes    Course notes .   "
},
{
  "id": "homework-2",
  "level": "1",
  "url": "homework-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 01",
  "body": " Homework 01   Due: Friday 11th September 2026 .   Instructions: Solutions should be written (or typed) clearly and legibly. Homeworks should be written alone without the use of AI.      Let be an uncountable set. A set is cocountable if its complement is countable.    Show that the collection of all subsets of which are either countable or cocountable forms a -algebra.     Define a function by if is countable, and if is cocountable. Show that is a measure on .       Let be a non-empty set. Show that the counting measure on defines a measure. Show that is a complete measure space.  If we endow with the discrete topology, show that is a Borel measure on .      Let be a measurable space. Fix and let be the Dirac measure. Show that is a measure.  Suppose is a topological space, and is the Borel sets of . Show that is a Borel measure.      Let be a measure space.     Define a collection of subsets by Show that is a -algebra.      Define on by when and for some with . Show that is a measure on . (You should first show that is well-defined).      Show that is a complete measure space.      "
},
{
  "id": "homework-2-3-1",
  "level": "2",
  "url": "homework-2.html#homework-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be an uncountable set. A set is cocountable if its complement is countable.    Show that the collection of all subsets of which are either countable or cocountable forms a -algebra.     Define a function by if is countable, and if is cocountable. Show that is a measure on .    "
},
{
  "id": "homework-2-3-2",
  "level": "2",
  "url": "homework-2.html#homework-2-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be a non-empty set. Show that the counting measure on defines a measure. Show that is a complete measure space.  If we endow with the discrete topology, show that is a Borel measure on .   "
},
{
  "id": "homework-2-3-3",
  "level": "2",
  "url": "homework-2.html#homework-2-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let be a measurable space. Fix and let be the Dirac measure. Show that is a measure.  Suppose is a topological space, and is the Borel sets of . Show that is a Borel measure.   "
},
{
  "id": "homework-2-3-4",
  "level": "2",
  "url": "homework-2.html#homework-2-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let be a measure space.     Define a collection of subsets by Show that is a -algebra.      Define on by when and for some with . Show that is a measure on . (You should first show that is well-defined).      Show that is a complete measure space.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
