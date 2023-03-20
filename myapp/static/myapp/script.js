function getTime() {
    var d = new Date();
    var hours = d.getHours().toString().padStart(2, '0');
    var minutes = d.getMinutes().toString().padStart(2, '0');
    return hours + ':' + minutes;
}

$('#mechanics').on('click', function() {
    getExplanation(' Mechanics in physics for beginner');
});

$('#thermodynamics').on('click', function() {
    getExplanation(' Thermodynamics in physics for beginner');
});

$('#optics').on('click', function() {
    getExplanation(' Optics class in physics for beginner');
});
$('#electromagnetism').on('click', function() {
    getExplanation(' Electromagnetism in physics for beginner');
});
$('#modern_physics').on('click', function() {
    getExplanation(' Modern Physics in physics for beginner');
});
$('#ECF').on('click', function() {
    getExplanation('Electric Charges and Fields in physics for intermediate');
});
$('#EPC').on('click', function() {
    getExplanation('Electrostatic Potential and Capacitance in physics for intermediate');
});
$('#CE').on('click', function() {
    getExplanation('Current Electricity in physics for intermediate');
});
$('#MCAC').on('click', function() {
    getExplanation('Moving Charges and Magnetism in physics for intermediate');
});
$('#MAM').on('click', function() {
    getExplanation('Magnetism and Matter in physics for intermediate');
});
$('#EI').on('click', function() {
    getExplanation('Electromagnetic Induction in physics for intermediate');
});
$('#AC').on('click', function() {
    getExplanation('Alternating Current in physics for intermediate');
});
$('#EW').on('click', function() {
    getExplanation('Electromagnetic Waves in physics for intermediate');
});
$('#ROAOI').on('click', function() {
    getExplanation('Ray Optics and Optical Instruments in physics for intermediate');
});
$('#WO').on('click', function() {
    getExplanation('Wave Optics in physics for intermediate');
});
$('#EWadv').on('click', function() {
    console.log("HELLO")
    getExplanation('Electromagnetic Waves class 12th, given that I am very good in beginner stuff ');
});
$('#DNOMAR').on('click', function() {
    getExplanation('Dual Nature of Matter and Radiation class 12th');
});
$('#ATOM').on('click', function() {
    getExplanation('Atoms class 12th');
});
$('#NUC').on('click', function() {
    getExplanation('Nuclei class 12th');
});
$('#SE').on('click', function() {
    getExplanation('Semiconductor Electronics class 12th');
});
$('#CS').on('click', function() {
    getExplanation('Communication Systems class 12th');
});
$('#TSOA').on('click', function() {
    getExplanation('The structure of atoms');
});
$('#TPT').on('click', function() {
    getExplanation('The periodic table');
});
$('#BOND').on('click', function() {
    getExplanation('Bonding');
});
$('#REAC').on('click', function() {
    getExplanation('Reactions');
});
$('#STOIC').on('click', function() {
    getExplanation('Stoichiometry');
});
$('#ANB').on('click', function() {
    getExplanation('Acids and bases');
});
$('#THERMOC').on('click', function() {
    getExplanation('Thermochemistry');
});
$('#ELECTROC').on('click', function() {
    getExplanation('Electrochemistry');
});
$('#NUCCHEM').on('click', function() {
    getExplanation('Nuclear chemistry');
});
$('#CHEMINT1').on('click', function() {
    getExplanation('Intermolecular Forces');
});
$('#CHEMINT2').on('click', function() {
    getExplanation('Colligative Properties');
});
$('#CHEMAD1').on('click', function() {
    getExplanation('Organic chemistry - natural products');
});
$('#CHEMAD2').on('click', function() {
    getExplanation('Organic chemistry - hydrocarbons');
});
$('#MATHBEG1').on('click', function() {
    getExplanation('Algebra with some solved problems');
});
$('#MATHBEG2').on('click', function() {
    getExplanation('Functions with some solved problems');
});
$('#MATHINT1').on('click', function() {
    getExplanation('Trigonometric functions and their inverses with some solved problems');
});
$('#MATHINT2').on('click', function() {
    getExplanation('Complex numbers with some solved problems');
});
$('#MATHADV1').on('click', function() {
    getExplanation('Calculus with some solved problems');
});
$('#MATHADV2').on('click', function() {
    getExplanation('Discrete Mathematics with some solved problems');
});

//-------------------------------------------------------------------------------
$('#11PHYBEG1').on('click', function() {
    getExplanation('Electricity and magnetism');
});
$('#11PHYBEG2').on('click', function() {
    getExplanation('Light');
});

$('#11PHYINT1').on('click', function() {
    getExplanation('Gravitation');
});
$('#11PHYINT2').on('click', function() {
    getExplanation('Waves');
});

$('#11PHYADV1').on('click', function() {
    getExplanation('Quantum mechanics');
});
$('#11PHYADV2').on('click', function() {
    getExplanation('Rotational motion');
});
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
$('#11CHEMBEG1').on('click', function() {
    getExplanation('The structure of the atom');
});
$('#11CHEMBEG2').on('click', function() {
    getExplanation('Chemical bonds');
});

$('#11CHEMINT1').on('click', function() {
    getExplanation('Intermolecular forces');
});
$('#11CHEMINT2').on('click', function() {
    getExplanation('Redox reactions');
});

$('#11CHEMADV1').on('click', function() {
    getExplanation('Organic chemistry');
});
$('#11CHEMADV2').on('click', function() {
    getExplanation('Thermodynamics');
});
//-------------------------------------------------------------------------------

//-------------------------------------------------------------------------------
$('#11MATHBEG1').on('click', function() {
    getExplanation('Sets and Functions with some solved problems');
});
$('#11MATHBEG2').on('click', function() {
    getExplanation('Principle of Mathematical Induction with some solved problems');
});

$('#11MATHINT1').on('click', function() {
    getExplanation('Trigonometric Functions with some solved problems');
});
$('#11MATHINT2').on('click', function() {
    getExplanation('Calculus with some solved problems');
});

$('#11MATHADV1').on('click', function() {
    getExplanation('Vectors with some solved problems');
});
$('#11MATHADV2').on('click', function() {
    getExplanation('Introduction to Three-dimensional Geometry with some solved problems');
});
//-------------------------------------------------------------------------------


$('#chatsend').on('click', function() {
    let query = $('#userq').val();
    askGPT(query);
});

$('#testsubmit').on('click', function() {
    console.log("HELLO")
    let number = $('#noq').val()
    let title = $('#topic').val()
    if (number == '' || title == '') {
        alert("Please enter a value");
        return;
    }
    let numerical = $('#numerical').is(":checked")
    let theory = $('#theory').is(":checked")
    let mixed = $('#mixed').is(":checked")
    let type;
    if (numerical) {
        type = "numerical";
    } else if (theory) {
        type = "theory";
    } else if (mixed) {
        type = "both theory and numerical";
    } else {
        alert("ERROR TRY AGAIN");
        return;
    }

    let query = `Generate a question paper containing ${number} questions about ${title} containing ${type} type questions. make a <ol> list of them enclosing each question in a <li> tag`


    getQuestions(query);
});