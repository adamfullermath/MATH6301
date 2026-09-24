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
  "body": " Homework 01   Due: Friday 11th September 2026 .   Instructions: Solutions should be written (or typed) clearly and legibly. Homeworks should be written alone without the use of AI.      Let be an uncountable set. A set is cocountable if its complement is countable.    Show that the collection of all subsets of which are either countable or cocountable forms a -algebra.   The empty set is countable (it has elements). Hence   If , then either is countable, in which case is cocountable, or is cocountable, in which case is countable. In both cases .  To show that is a -algebra it remains to show that is closed under countable unions. Let be a countable collection of sets in , and let . If every set in is countable, then is countable (see Proposition A.2.6 ). Hence .  If not all sets are countable, then at least one is cocountable. Suppose is cocountable for some . Then, using DeMorgan's identities, As is countable, it follows that is countable, and thus is cocountable. Hence We have thus shown that is a -algebra.      Define a function by if is countable, and if is cocountable. Show that is a measure on .    It is immediate that , so we only need to show that is countably additive. To this end, let be a countable family of disjoint sets in . As above, if every set in is countable, then the union is countable. Thus   If is cocountable for some fixed , then as shown above, is cocountable. Note that, since the sets in are disjoint, for all . Thus, for , is countable. Hence Hence is countably additive, and therefore is a measure on        Let be a non-empty set. Show that the counting measure on defines a measure. Show that is a complete measure space.  If we endow with the discrete topology, show that is a Borel measure on .    As the empty set has zero elements, .  Let be a countable family of disjoint subsets of , and let . If is finite, then all but at most finitely many of the sets in are empty. Rearranging and removing the empty sets, there is an such that . That is is a partition of . By the pigeonhole principle,   If there is a such that has infinite cardinality, then has infinite cardinality as . Thus, and so   Finally, suppose every set in is finite, but is infinite. Then there are infinitely such that is non-empty. We have Thus We have thus shown that is a measure on   Note that any measure on the measure space is complete, since all subsets of are in the -algebra. Alternatively, the only set satisfying is the empty set, and the only subset of is   Now assume that is endowed with the discrete topology. In this case every subset of is open. Thus, the Borel sets are all subsets of .  Let be a compact set. The sets form an open cover of . Since is compact, there is a finite subcover, and so is finite. It follows that if is compact, then Thus is a Borel measure on       Let be a measurable space. Fix and let be the Dirac measure. Show that is a measure.  Suppose is a topological space, and is the Borel sets of . Show that is a Borel measure.    As ,   Let be a countable collection of disjoint sets in and let Note that if and only if for some if and only if for exactly one (since the sets in are disjoint). It follows that   Suppose now that . If there is a compact set such that is not a Borel set, then is not defined at , and so is not a Borel measure. However, Borel measures are almost exclusively considered in Hausdorff topological spaces. In fact, one usually considers locally compact Hausdorff spaces. More on this next semester. In Hausdorff topologically spaces, all compact sets are closed, and hence Borel (can you prove this?). Assuming that compact sets are Borel, if is compact, then is defined and finite. Thus is a Borel measure.      Let be a measure space.     Define a collection of subsets by Show that is a -algebra.    As the emptyset is in and , it follows that   Suppose is a countable collection of sets in . For each , we can write , where and for some set with Note that , , and Thus   Finally, suppose . Let and be such that where and for some with Then Intersecting the above by and noting that , we get As and , it follows that We have thus shown that is a -algebra.      Define on by when and for some with . Show that is a measure on . (You should first show that is well-defined).    We will first show that is well-defined. Suppose where , and and for some with Then It follows that Similarly, Hence, It follows that is well-defined.  Clearly, . To show is a measure, it remains to show that is countably additive. Let be a countable collection of disjoint sets in For each , we can write , where and for some set with Note that, is a disjoint collection of sets in . Thus completing the proof.      Show that is a complete measure space.    Suppose with Then, where , and for a set with . As , we also have   Take any . Then Note , and so writing as , we see that Hence is a complete measure space.      "
},
{
  "id": "homework-2-3-1",
  "level": "2",
  "url": "homework-2.html#homework-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be an uncountable set. A set is cocountable if its complement is countable.    Show that the collection of all subsets of which are either countable or cocountable forms a -algebra.   The empty set is countable (it has elements). Hence   If , then either is countable, in which case is cocountable, or is cocountable, in which case is countable. In both cases .  To show that is a -algebra it remains to show that is closed under countable unions. Let be a countable collection of sets in , and let . If every set in is countable, then is countable (see Proposition A.2.6 ). Hence .  If not all sets are countable, then at least one is cocountable. Suppose is cocountable for some . Then, using DeMorgan's identities, As is countable, it follows that is countable, and thus is cocountable. Hence We have thus shown that is a -algebra.      Define a function by if is countable, and if is cocountable. Show that is a measure on .    It is immediate that , so we only need to show that is countably additive. To this end, let be a countable family of disjoint sets in . As above, if every set in is countable, then the union is countable. Thus   If is cocountable for some fixed , then as shown above, is cocountable. Note that, since the sets in are disjoint, for all . Thus, for , is countable. Hence Hence is countably additive, and therefore is a measure on     "
},
{
  "id": "homework-2-3-2",
  "level": "2",
  "url": "homework-2.html#homework-2-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be a non-empty set. Show that the counting measure on defines a measure. Show that is a complete measure space.  If we endow with the discrete topology, show that is a Borel measure on .    As the empty set has zero elements, .  Let be a countable family of disjoint subsets of , and let . If is finite, then all but at most finitely many of the sets in are empty. Rearranging and removing the empty sets, there is an such that . That is is a partition of . By the pigeonhole principle,   If there is a such that has infinite cardinality, then has infinite cardinality as . Thus, and so   Finally, suppose every set in is finite, but is infinite. Then there are infinitely such that is non-empty. We have Thus We have thus shown that is a measure on   Note that any measure on the measure space is complete, since all subsets of are in the -algebra. Alternatively, the only set satisfying is the empty set, and the only subset of is   Now assume that is endowed with the discrete topology. In this case every subset of is open. Thus, the Borel sets are all subsets of .  Let be a compact set. The sets form an open cover of . Since is compact, there is a finite subcover, and so is finite. It follows that if is compact, then Thus is a Borel measure on    "
},
{
  "id": "homework-2-3-3",
  "level": "2",
  "url": "homework-2.html#homework-2-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let be a measurable space. Fix and let be the Dirac measure. Show that is a measure.  Suppose is a topological space, and is the Borel sets of . Show that is a Borel measure.    As ,   Let be a countable collection of disjoint sets in and let Note that if and only if for some if and only if for exactly one (since the sets in are disjoint). It follows that   Suppose now that . If there is a compact set such that is not a Borel set, then is not defined at , and so is not a Borel measure. However, Borel measures are almost exclusively considered in Hausdorff topological spaces. In fact, one usually considers locally compact Hausdorff spaces. More on this next semester. In Hausdorff topologically spaces, all compact sets are closed, and hence Borel (can you prove this?). Assuming that compact sets are Borel, if is compact, then is defined and finite. Thus is a Borel measure.   "
},
{
  "id": "homework-2-3-4",
  "level": "2",
  "url": "homework-2.html#homework-2-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let be a measure space.     Define a collection of subsets by Show that is a -algebra.    As the emptyset is in and , it follows that   Suppose is a countable collection of sets in . For each , we can write , where and for some set with Note that , , and Thus   Finally, suppose . Let and be such that where and for some with Then Intersecting the above by and noting that , we get As and , it follows that We have thus shown that is a -algebra.      Define on by when and for some with . Show that is a measure on . (You should first show that is well-defined).    We will first show that is well-defined. Suppose where , and and for some with Then It follows that Similarly, Hence, It follows that is well-defined.  Clearly, . To show is a measure, it remains to show that is countably additive. Let be a countable collection of disjoint sets in For each , we can write , where and for some set with Note that, is a disjoint collection of sets in . Thus completing the proof.      Show that is a complete measure space.    Suppose with Then, where , and for a set with . As , we also have   Take any . Then Note , and so writing as , we see that Hence is a complete measure space.    "
},
{
  "id": "homework-3",
  "level": "1",
  "url": "homework-3.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 02",
  "body": " Homework 02   Due: Friday 9th October 2026 .   Instructions: Solutions should be written (or typed) clearly and legibly. Homeworks should be written alone without the use of AI.      Let be a non-empty set and let be an outer-measure on . Take a subset . Show that, if , then is -measurable.      Let be an uncountable set. Let be the collection of all countable subsets of . Define , by for all .     Show that is a semiring, and that is a premeasure on .      Let be the outer measure induced by . Calculate for each .      Let be the collection of -measurable sets. Give a description of the -measurable subsets.      Define by for all . Show that is a measure on .      Let be the Carathéodory extension of (i.e. is the restriction of to the -measurable sets).      Note that is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem?       Let be the Cantor set; let ; and let be the Cantor-Lebesgue function. Let be the Borel measure on induced by . I.e. and   Show that , , and .      Suppose and are measures on a measurable space and (i.e. for all ). Define on by      Show that is a measure on .      Show that (where is defined by for ).      Show that if is -finite then the is the unique measure satisfying .    Assume there are two such measures and and show they have to be equal on sets with . Then move to general measurable sets.      "
},
{
  "id": "homework-3-3-1",
  "level": "2",
  "url": "homework-3.html#homework-3-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be a non-empty set and let be an outer-measure on . Take a subset . Show that, if , then is -measurable.   "
},
{
  "id": "homework-3-3-2",
  "level": "2",
  "url": "homework-3.html#homework-3-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be an uncountable set. Let be the collection of all countable subsets of . Define , by for all .     Show that is a semiring, and that is a premeasure on .      Let be the outer measure induced by . Calculate for each .      Let be the collection of -measurable sets. Give a description of the -measurable subsets.      Define by for all . Show that is a measure on .      Let be the Carathéodory extension of (i.e. is the restriction of to the -measurable sets).      Note that is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem?    "
},
{
  "id": "homework-3-3-3",
  "level": "2",
  "url": "homework-3.html#homework-3-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let be the Cantor set; let ; and let be the Cantor-Lebesgue function. Let be the Borel measure on induced by . I.e. and   Show that , , and .   "
},
{
  "id": "homework-3-3-4",
  "level": "2",
  "url": "homework-3.html#homework-3-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Suppose and are measures on a measurable space and (i.e. for all ). Define on by      Show that is a measure on .      Show that (where is defined by for ).      Show that if is -finite then the is the unique measure satisfying .    Assume there are two such measures and and show they have to be equal on sets with . Then move to general measurable sets.    "
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
