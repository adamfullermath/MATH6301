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
  "body": " Homework 02   Due: Friday 9th October 2026 .   Instructions: Solutions should be written (or typed) clearly and legibly. Homeworks should be written alone without the use of AI.      Let be a non-empty set and let be an outer-measure on . Take a subset . Show that, if , then is -measurable.    Assume . Let be any subset. Since , we have that by the monotonicity of . We also have that, , again by monotonicity. Thus, It follows that , and hence is -measurable.      Let be an uncountable set. Let be the collection of all countable subsets of . Define , by for all .     Show that is a semiring, and that is a premeasure on .    Any subset of a countable set is countable, Proposition A.2.6. . Thus, is then and . Hence is a semiring.  If are disjoint countable sets then And if for a countable family of countable sets, then Hence is a premeasure on       Let be the outer measure induced by . Calculate for each .    Let be countable. Then . This can be shown directly. Alternatively, it follows from Theorem 2.3.9 .  Suppose now that is uncountable. Since a countable union of countable sets is countable, there is no countable collection of sets in such that . Thus , (see Theorem 2.3.2 ).  Hence, for        Let be the collection of -measurable sets. Give a description of the -measurable subsets.    We will show that . To this end, fix . Take any . If is countable, then both and are countable. Thus, If is uncountable, then at least one of and is uncountable. Thus, Hence is measurable, and thus       Define by for all . Show that is a measure on .    There isn't much to show here. , and for any countable collection of sets .      Let be the Carathéodory extension of (i.e. is the restriction of to the -measurable sets).      Note that is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem?    The Carathéodory-Hahn Theorem only guarantees uniqueness in the case when the premeasure is -finite. As is uncountable, and is the collection of all countable subsets of , can not be covered by countably many elements of . Thus is not -finite.       Let be the Cantor set; let ; and let be the Cantor-Lebesgue function. Let be the Borel measure on induced by . I.e. and   Show that , , and .    By the definition of (and ), we can write , where is a disjoint collection of open intervals, and is constant on each For each , let   Fix . As is continuous, and is constant for all , it follows that is constant on . Hence Thus, Therefore,   Since is the cumulative distribution function for it follows that By the definition of , Hence, .  Finally, since , it follows from the excision property that       Suppose and are measures on a measurable space and (i.e. for all ). Define on by      Show that is a measure on .    First note that we can't define since this value may not be defined (we could be looking at ).  It is clear that Let be disjoint sets in and let . Note that if is measurable with , then is a disjoint collection of measurable sets with and However, if is a collection of (necessarily disjoint) sets with and for each , then it is possible that Hence, Note that the penultimate inequality holds since the can be chosen independently of eachother, and all terms are positive (in general the supremum of a sum is less than or equal to the sum of the suprema).  Fix . Note that, a measurable set satisfies if and only if for each Hence, by similar reasoning as above, Thus, As this holds for all , it follows that We have thus shown that , and hence is a measure.      Show that (where is defined by for ).    Take . If , then and hence Suppose now that Then for all measurable  Thus , and so       Show that if is -finite then the is the unique measure satisfying .    Assume there are two such measures and and show they have to be equal on sets with . Then move to general measurable sets.    Let and be two measures satisfying Take measurable with Then As , it follows that   If is -finite, then there are disjoint measurable sets sets with and for each . Take any measurable . Then, for each , , and so Hence   Note that, if is not -finite, then does not necessarily hold. For example, let be the measure defined by and let . Then, if is any measure on , we have that       "
},
{
  "id": "homework-3-3-1",
  "level": "2",
  "url": "homework-3.html#homework-3-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be a non-empty set and let be an outer-measure on . Take a subset . Show that, if , then is -measurable.    Assume . Let be any subset. Since , we have that by the monotonicity of . We also have that, , again by monotonicity. Thus, It follows that , and hence is -measurable.   "
},
{
  "id": "homework-3-3-2",
  "level": "2",
  "url": "homework-3.html#homework-3-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Let be an uncountable set. Let be the collection of all countable subsets of . Define , by for all .     Show that is a semiring, and that is a premeasure on .    Any subset of a countable set is countable, Proposition A.2.6. . Thus, is then and . Hence is a semiring.  If are disjoint countable sets then And if for a countable family of countable sets, then Hence is a premeasure on       Let be the outer measure induced by . Calculate for each .    Let be countable. Then . This can be shown directly. Alternatively, it follows from Theorem 2.3.9 .  Suppose now that is uncountable. Since a countable union of countable sets is countable, there is no countable collection of sets in such that . Thus , (see Theorem 2.3.2 ).  Hence, for        Let be the collection of -measurable sets. Give a description of the -measurable subsets.    We will show that . To this end, fix . Take any . If is countable, then both and are countable. Thus, If is uncountable, then at least one of and is uncountable. Thus, Hence is measurable, and thus       Define by for all . Show that is a measure on .    There isn't much to show here. , and for any countable collection of sets .      Let be the Carathéodory extension of (i.e. is the restriction of to the -measurable sets).      Note that is also an extension of . Why does this not contradict the Carathéodory-Hahn Theorem?    The Carathéodory-Hahn Theorem only guarantees uniqueness in the case when the premeasure is -finite. As is uncountable, and is the collection of all countable subsets of , can not be covered by countably many elements of . Thus is not -finite.    "
},
{
  "id": "homework-3-3-3",
  "level": "2",
  "url": "homework-3.html#homework-3-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let be the Cantor set; let ; and let be the Cantor-Lebesgue function. Let be the Borel measure on induced by . I.e. and   Show that , , and .    By the definition of (and ), we can write , where is a disjoint collection of open intervals, and is constant on each For each , let   Fix . As is continuous, and is constant for all , it follows that is constant on . Hence Thus, Therefore,   Since is the cumulative distribution function for it follows that By the definition of , Hence, .  Finally, since , it follows from the excision property that    "
},
{
  "id": "homework-3-3-4",
  "level": "2",
  "url": "homework-3.html#homework-3-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Suppose and are measures on a measurable space and (i.e. for all ). Define on by      Show that is a measure on .    First note that we can't define since this value may not be defined (we could be looking at ).  It is clear that Let be disjoint sets in and let . Note that if is measurable with , then is a disjoint collection of measurable sets with and However, if is a collection of (necessarily disjoint) sets with and for each , then it is possible that Hence, Note that the penultimate inequality holds since the can be chosen independently of eachother, and all terms are positive (in general the supremum of a sum is less than or equal to the sum of the suprema).  Fix . Note that, a measurable set satisfies if and only if for each Hence, by similar reasoning as above, Thus, As this holds for all , it follows that We have thus shown that , and hence is a measure.      Show that (where is defined by for ).    Take . If , then and hence Suppose now that Then for all measurable  Thus , and so       Show that if is -finite then the is the unique measure satisfying .    Assume there are two such measures and and show they have to be equal on sets with . Then move to general measurable sets.    Let and be two measures satisfying Take measurable with Then As , it follows that   If is -finite, then there are disjoint measurable sets sets with and for each . Take any measurable . Then, for each , , and so Hence   Note that, if is not -finite, then does not necessarily hold. For example, let be the measure defined by and let . Then, if is any measure on , we have that     "
},
{
  "id": "homework-4",
  "level": "1",
  "url": "homework-4.html",
  "type": "Worksheet",
  "number": "",
  "title": "Homework 03",
  "body": " Homework 03   Due: Friday 9th October 2026 .   Instructions: Solutions should be written (or typed) clearly and legibly. Homeworks should be written alone without the use of AI.      Let be a continuous function on a closed interval . For a partition of define as and define the arc length  of on as Show that is of bounded variation if and only if .       Let be a measurable space, and let be a measurable extended real-valued function with measurable domain . Show that the set is measurable for all     You will need to treat the values and differently than       Give an example of a measurable space and an extended real-valued function with measurable domain which satisfies is measurable for all , but is not a measurable function.       Let be a measurable space, and let be a sequence of measurable functions on . Show that the functions  ;  ;  ; and    are all measurable functions.      Let be a measurable space. Fix and let be the Dirac measure at . If is a non-negative measurable function on , what is the value of ?      Let be the counting measure on the subsets of , and let be a (necessarily measurable) function from the non-zero intergers to .  Show that is integrable with respect to if and only if the series converges absolutely to a finite number. Further show that if is integrable then      "
},
{
  "id": "homework-4-3-1",
  "level": "2",
  "url": "homework-4.html#homework-4-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Let be a continuous function on a closed interval . For a partition of define as and define the arc length  of on as Show that is of bounded variation if and only if .   "
},
{
  "id": "exer-f-c-meas",
  "level": "2",
  "url": "homework-4.html#exer-f-c-meas",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "   Let be a measurable space, and let be a measurable extended real-valued function with measurable domain . Show that the set is measurable for all     You will need to treat the values and differently than       Give an example of a measurable space and an extended real-valued function with measurable domain which satisfies is measurable for all , but is not a measurable function.    "
},
{
  "id": "homework-4-3-3",
  "level": "2",
  "url": "homework-4.html#homework-4-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Let be a measurable space, and let be a sequence of measurable functions on . Show that the functions  ;  ;  ; and    are all measurable functions.   "
},
{
  "id": "exer-dirac-integration",
  "level": "2",
  "url": "homework-4.html#exer-dirac-integration",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let be a measurable space. Fix and let be the Dirac measure at . If is a non-negative measurable function on , what is the value of ?   "
},
{
  "id": "homework-4-3-5",
  "level": "2",
  "url": "homework-4.html#homework-4-3-5",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "",
  "body": "  Let be the counting measure on the subsets of , and let be a (necessarily measurable) function from the non-zero intergers to .  Show that is integrable with respect to if and only if the series converges absolutely to a finite number. Further show that if is integrable then    "
},
{
  "id": "root-1-2-6-2",
  "level": "1",
  "url": "root-1-2-6-2.html",
  "type": "Worksheet",
  "number": "",
  "title": "Midterm 01",
  "body": " Midterm 01    Instructions: All questions are equally weighted. Answer all questions.       Let be any non-empty set. Take . What properties must satisfy in order to be a  -algebra ?      Let be any set and let be a -algebra of subsets of . Give the definition of a measure  on .      Let be a non-empty set. Fix a point . Define a function by Show that is a measure.        Give the definition of an outer measure .      Let be an outer measure. Give the definition of a measurable set with respect to .      Let be a set, and let be a collection of subsets of . Let be a set function. Define the outer measure induced by .      Let be any non-empty set and let define and . Determine the outer measure induced by . Describe the -algebra of -measurable sets.         Give the definition of the Borel sets in .      Let be a Borel measure on a closed interval . Give the definition of the cumulative distribution function for .      Let be the Lebesgue measure on restricted to the Borel sets. Define a Borel measure on by for all Borel sets Describe the cumulative distribution function of .       Let be a measurable space.     Give the definition of a signed measure  on       Let be a signed measure on Give the definition of -positive sets ; -negative sets ; and -mull sets.       Let and be two finite measures on . Show that defines a signed measure on .      "
},
{
  "id": "root-1-2-6-2-3-1",
  "level": "2",
  "url": "root-1-2-6-2.html#root-1-2-6-2-3-1",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "   Let be any non-empty set. Take . What properties must satisfy in order to be a  -algebra ?      Let be any set and let be a -algebra of subsets of . Give the definition of a measure  on .      Let be a non-empty set. Fix a point . Define a function by Show that is a measure.    "
},
{
  "id": "root-1-2-6-2-3-2",
  "level": "2",
  "url": "root-1-2-6-2.html#root-1-2-6-2-3-2",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "   Give the definition of an outer measure .      Let be an outer measure. Give the definition of a measurable set with respect to .      Let be a set, and let be a collection of subsets of . Let be a set function. Define the outer measure induced by .      Let be any non-empty set and let define and . Determine the outer measure induced by . Describe the -algebra of -measurable sets.    "
},
{
  "id": "root-1-2-6-2-3-3",
  "level": "2",
  "url": "root-1-2-6-2.html#root-1-2-6-2-3-3",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "   Give the definition of the Borel sets in .      Let be a Borel measure on a closed interval . Give the definition of the cumulative distribution function for .      Let be the Lebesgue measure on restricted to the Borel sets. Define a Borel measure on by for all Borel sets Describe the cumulative distribution function of .    "
},
{
  "id": "root-1-2-6-2-3-4",
  "level": "2",
  "url": "root-1-2-6-2.html#root-1-2-6-2-3-4",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  Let be a measurable space.     Give the definition of a signed measure  on       Let be a signed measure on Give the definition of -positive sets ; -negative sets ; and -mull sets.       Let and be two finite measures on . Show that defines a signed measure on .    "
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
