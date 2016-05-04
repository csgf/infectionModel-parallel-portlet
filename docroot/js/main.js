//
// preSubmit
//
function preSubmit() {

	var taskNumber = document.getElementById(taskNumberId);
	var jobIdentifier = document.getElementById(jobLabelId);
	// var executable = "";
	// var executables = new Array();
	var jobs = new Array();
	// var finalJobExecutalble = "";
	// var finalJobArgument = "";

	// var state_executable = false;
	var state_argument = false;
	// var state_executables = false;
	var state_taskNumber = false;
	var state_jobIdentifier = false;
	// var state_finalJobExecutable = false;

	// var index_missingExecutable = -1;
	var index_missingArgument = -1;

	if (taskNumber.value == "") {
		state_taskNumber = true;
	} else {
		for (var i = 0; i < taskNumber.value; i++) {
			var job = new Array();
			for (var j = 0; j < 4; j++) {

				var argument = document.getElementById('argument_' + (i + 1)
						+ '_' + (j + 1));
				if (argument.value != "") {
					job[j] = argument.value;
				} else {
					index_missingArgument = i;
				}
			}
			jobs[i] = job;
		}
		console.log(JSON.stringify(jobs));

		document.getElementById(argumentsId).value = JSON.stringify(jobs);
		// }

		if (index_missingArgument != -1) {
			state_argument = true;
		}

		// if (index_missingExecutable != -1) {
		// state_executables = true;
		// }
	}

	if (jobIdentifier.value == "")
		state_jobIdentifier = true;

	var missingFields = "";
	if (state_taskNumber) {
		missingFields += "  Task Number\n";
	}
	// if (state_executable) {
	// missingFields += " Missing Executable\n";
	// }
	// if (state_executables) {
	// missingFields += " Executable " + index_missingExecutable + "\n";
	// }
	if (state_argument) {
		missingFields += "  Missing Argument " + index_missingArgument + "\n";
	}
	if (state_jobIdentifier) {
		missingFields += "  Collection identifier\n";
	}
	// if (state_finalJobExecutable) {
	// missingFields += " Final Job Executable\n"
	// }
	if (missingFields == "") {
//		var s = "";
//		s += "\nTask Number: " + taskNumber.value + "\n";
//		for (var i = 0; i < taskNumber.value; i++) {
//			if (document.getElementById(collectionTypeId).value != "JOB_PARAMETRIC") {
//				s += "Executables[" + i + "]: " + executables[i].value + "\n";
//			} else {
//				s += "Executable: " + executable + "\n";
//			}
//			s += "Arguments[" + i + "]: " + arguments[i] + "\n";
//		}
//		s += "FinalJobExecutable: " + finalJobExecutalble + "\n";
//		s += "FinalJobArgument: " + finalJobArgument + "\n";
//		s += "Collection Identifier: " + jobIdentifier.value;

		 document.forms[0].submit();
	} else {
		alert("You cannot send an inconsistent "
				+ document.getElementById(collectionTypeId).options[document
						.getElementById(collectionTypeId).selectedIndex].text
				+ "!\nMissing fields:\n" + missingFields);
	}
}

//
// addDemo
//
// This function is responsible to fill form with demo values
function addDemo() {
	var currentTime = new Date();
	var taskNumber = document.getElementById(taskNumberId);
	taskNumber.value = 3;
	var jobIdentifier = document.getElementById(jobLabelId);
	var selectedCollectionType = document.getElementById(collectionTypeId);

	updatePage();
	var executables = new Array();
	for (var i = 0; i < taskNumber.value; i++) {
		executables[i] = document.getElementById('executables' + i);
	}

	switch (selectedCollectionType.value) {
	case "JOB_COLLECTION":
		executables[0].value = 'hostname';
		executables[1].value = 'ls';
		executables[2].value = 'pwd'
		jobIdentifier.value = "Demo Collection: ";
		break;
	case "WORKFLOW_N1":
		executables[0].value = 'hostname';
		executables[1].value = 'ls';
		executables[2].value = 'pwd'
		document.getElementById('final_executableId').value = "ls";
		document.getElementById('final_argumentId').value = "-l";
		jobIdentifier.value = "Demo Workflow N1: ";
		break;
	case "JOB_PARAMETRIC":
		var executable = document.getElementById('executable');
		executable.value = "echo";

		var arguments = new Array();

		for (var i = 0; i < taskNumber.value; i++) {
			arguments[i] = document.getElementById('argument' + i).value = "Job "
					+ i;
		}

		jobIdentifier.value = "Demo Parametric Job: ";
		break;
	}
	jobIdentifier.value += currentTime.getDate() + "/"
			+ (currentTime.getMonth() + 1) + "/" + currentTime.getFullYear()
			+ " - " + currentTime.getHours() + ":" + currentTime.getMinutes()
			+ ":" + currentTime.getSeconds();
}

var control = true;

function updatePage() {
	cancel();
	var tablecontents = "";
	var numInput = document.getElementById(taskNumberId).value;

	tablecontents = "<table>";
	tablecontents += "<tr>";
	tablecontents += "</tr>";
	tablecontents += "<tr>";
	tablecontents += "<th/><th style='margin: 1px;'>Simulation Period</th><th style='margin: 1px;'>Recovered Count</th><th style='margin: 1px;'>Infected Count</th><th style='margin: 1px;'>Susceptible Count</th>";
	tablecontents += "</tr>";

	for (var i = 1; i <= numInput; i++) {
		tablecontents += "<tr>";
		tablecontents += "<td><label>Job " + i + ": </label> </td>";
		for (var j = 1; j <= 4; j++) {
			tablecontents += "<td><input type='text' name='argument' id='argument_"
					+ i + "_" + j + "' style='margin: 1px;'/> </td>";
		}
		tablecontents += "</tr>";
	}

	tablecontents += "</table>";
	document.getElementById('container').innerHTML += tablecontents;

	control = false;
}

//
// resetForm
//
// This function is responsible to enable all textareas
// when the user press the 'reset' form button
function resetForm() {
	document.getElementById(collectionTypeId).selectdindex = 0;
	document.getElementById(taskNumberId).value = "";
	cancel();
	document.getElementById(jobLabelId).value = "multi-infrastructure-collection job description";
	// if(document.getElementById('task').style.visibility == 'hidden')
	// document.getElementById('task').style.visibility = 'visible';
}

function cancel() {
	if (control == false) {
		var node = document.getElementById('container');
		while (node.firstChild) {
			node.removeChild(node.firstChild);
		}
	}
}