"use strict";

Number.prototype.formatMoney = function (c, d, t) {
  var n = this,
      c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d === undefined ? "." : d,
      t = t === undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
      j = (j = i.length) > 3 ? j % 3 : 0;
  return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}; // Source: http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript


function ElementReader() {
  this.InputCheckbox = function (idInput) {
    var input = document.getElementById(idInput);

    if (input === null) {
      return undefined;
    }

    return input.checked;
  };

  this.InputInt = function (idInput) {
    var input = document.getElementById(idInput);

    if (input === null) {
      return undefined;
    }

    return parseInt(input.value);
  };

  this.Select = function (idSelect) {
    var select = document.getElementById(idSelect);

    if (select === null) {
      return undefined;
    }

    var idx = select.selectedIndex;
    return select.options[idx].value;
  };
}

function ElementWriter() {
  this.Tag = function (idTag, value) {
    var tag = document.getElementById(idTag);

    if (tag !== null) {
      tag.innerHTML = value;
    }
  };

  this.TagCurrency = function (idTag, value) {
    this.Tag(idTag, value.formatMoney(2, ',', '&nbsp;') + '$');
  };
}

function salaryCalculator() {
  var incomeTaxRate = 0.18;
  var employmentInsuranceRate = 0.07;
  var canadaPensionPlanRate = 0.05;
  var additionBonusValue = 100;
  var additionAllowanceValue = 150;
  this.grossSalary;
  this.additionBonus;
  this.additionAllowance;
  this.gender;
  this.dependents;

  this.getAdditions = function () {
    var additions = 0;

    if (this.additionBonus === true) {
      additions += additionBonusValue;
    }

    if (this.additionAllowance === true) {
      additions += additionAllowanceValue;
    }

    return additions;
  };

  this.getCanadaPensionPlan = function () {
    return this.grossSalary * canadaPensionPlanRate;
  };

  this.getEmploymentInsurance = function () {
    return this.grossSalary * employmentInsuranceRate;
  };

  this.getFinalSalary = function () {
    return this.grossSalary - this.getCanadaPensionPlan() - this.getEmploymentInsurance() - this.getIncomeTax() + this.getAdditions();
  };

  this.getIncomeTax = function () {
    var relevantIncomeTaxRate = incomeTaxRate;

    if (this.gender === 'F') {
      relevantIncomeTaxRate -= 0.02;
    }

    if (this.dependents === 3) {
      relevantIncomeTaxRate -= 0.01;
    } else if (this.dependents > 3) {
      relevantIncomeTaxRate -= 0.02;
    }

    return this.grossSalary * relevantIncomeTaxRate;
  };
}

function computeSalary() {
  var reader = new ElementReader();
  var writer = new ElementWriter();
  var salCalc = new salaryCalculator();
  salCalc.grossSalary = reader.InputInt('grossSalary');
  salCalc.additionBonus = reader.InputCheckbox('additionBonus');
  salCalc.additionAllowance = reader.InputCheckbox('additionAllowance');
  salCalc.gender = reader.Select('gender');
  salCalc.dependents = reader.InputInt('dependents');
  writer.TagCurrency('incomeTaxResult', salCalc.getIncomeTax());
  writer.TagCurrency('employmentInsuranceResult', salCalc.getEmploymentInsurance());
  writer.TagCurrency('canadaPensionPlanResult', salCalc.getCanadaPensionPlan());
  writer.TagCurrency('additionsResult', salCalc.getAdditions());
  writer.TagCurrency('finalSalaryResult', salCalc.getFinalSalary());
}

function resetAll() {
  var writer = new ElementWriter();
  var results = ['incomeTaxResult', 'employmentInsuranceResult', 'canadaPensionPlanResult', 'additionsResult', 'finalSalaryResult'];

  for (var i = 0; i < results.length; i++) {
    writer.Tag(results[i], '');
  }
}