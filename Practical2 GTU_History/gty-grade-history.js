function show() {
  const enr = document.querySelector("#enrollment");
  const c = document.querySelector("#captch");
  if (c.value == "6e69") {
    second.innerHTML = `
    <br>

    <table>
      <tr>
        <td>Name :</td>
        <td>LATHIYA YASH ANILBHAI</td>
      </tr>
      <tr>
        <td>Enrollment No :</td>
        <td>${enr.value}</td>
      </tr>
      <tr>
        <td>Institute :</td>
        <td>020--GOVERNMENT ENGINEERING COLLEGE, RAJKOT</td>
      </tr>
      <tr>
        <td>Branch :</td>
        <td>BE-07-COMPUTER ENGINEERING</td>
      </tr>
    </table>

    <br>
    
    <table border="1" width="100%"  >
      <tr id="t90">
        <td>ENROLLMENT NO.</td>
        <td>CPI</td>
        <td>CGPA</td>
        <td>TOT BACKL	</td>
        <td>BCK1</td>
        <td>BCK2</td>
        <td>BCK3</td>
        <td>BCK4</td>
        <td>BCK5</td>
        <td>BCK6</td>
        <td>BCK7</td>
        <td>BCK8</td>
      </tr>
      <tr id="t91">
        <td>${enr.value}</td>
        <td>9.27</td>
        <td>9.31</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <br>

    <table border="1" width="100%" id="t92" >
      <tr>
        <td>Last Exam</td>
        <td>Sem</td>
        <td>Declaration Date	</td>
        <td>Cur Back</td>
        <td>SPI</td>
      </tr>
      <tr>
        <td>BE SEM 4 - Regular (MAY 2022)</td>
        <td>4</td>
        <td>16-9-2022</td>
        <td>0</td>
        <td>8.61</td>
      </tr>
    </table>

    <br>

    <table border="1" width="100%" id="t93" >
      <tr>
        <td>SEM 1</td>
      </tr>
    </table>
    <br>
    <table border="1" width="100%"  >
      <tr>
        <td>WINTER - 2020 (SEAT NO : 200200107095)</td>
        <td>CUR. BACKLOG : 0</td>
      </tr>
    </table>
    <table border="1" width="100%" id="t94" >
      <tr>
        <td>SUB CODE</td>
        <td>SUBJECT NAME</td>
        <td>E_AB</td>
        <td>TH ESE</td>
        <td>TH PA</td>
        <td>TH TOTAL</td>
        <td>PR ESE</td>
        <td>PR PA</td>
        <td>PR TOTAL</td>
        <td>PR TOTAL</td>
      </tr>
      <tr>
        <td>3110005</td>
        <td>Basic Electrical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110006</td>
        <td>Basic Mechanical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110012</td>
        <td>Workshop / Manufacturing Practise</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110014</td>
        <td>Mathematics - 1</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110017</td>
        <td>Induction Program</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110018</td>
        <td>Physics</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
    </table>

    <br>

    <table border="1" width="100%" id="t93" >
      <tr>
        <td>SEM 2</td>
      </tr>
    </table>
    <br>
    <table border="1" width="100%"  >
      <tr>
        <td>WINTER - 2020 (SEAT NO : 200200107095)</td>
        <td>CUR. BACKLOG : 0</td>
      </tr>
    </table>
    <table border="1" width="100%" id="t94" >
      <tr>
        <td>SUB CODE</td>
        <td>SUBJECT NAME</td>
        <td>E_AB</td>
        <td>TH ESE</td>
        <td>TH PA</td>
        <td>TH TOTAL</td>
        <td>PR ESE</td>
        <td>PR PA</td>
        <td>PR TOTAL</td>
        <td>PR TOTAL</td>
      </tr>
      <tr>
        <td>3110005</td>
        <td>Basic Electrical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110006</td>
        <td>Basic Mechanical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110012</td>
        <td>Workshop / Manufacturing Practise</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110014</td>
        <td>Mathematics - 1</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110017</td>
        <td>Induction Program</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110018</td>
        <td>Physics</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
    </table>

    <br>

    <table border="1" width="100%"  id="t93">
      <tr>
        <td>SEM 3</td>
      </tr>
    </table>
    <br>
    <table border="1" width="100%"  >
      <tr>
        <td>WINTER - 2020 (SEAT NO : 200200107095)</td>
        <td>CUR. BACKLOG : 0</td>
      </tr>
    </table>
    <table border="1" width="100%" id="t94" >
      <tr>
        <td>SUB CODE</td>
        <td>SUBJECT NAME</td>
        <td>E_AB</td>
        <td>TH ESE</td>
        <td>TH PA</td>
        <td>TH TOTAL</td>
        <td>PR ESE</td>
        <td>PR PA</td>
        <td>PR TOTAL</td>
        <td>PR TOTAL</td>
      </tr>
      <tr>
        <td>3110005</td>
        <td>Basic Electrical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110006</td>
        <td>Basic Mechanical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110012</td>
        <td>Workshop / Manufacturing Practise</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110014</td>
        <td>Mathematics - 1</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110017</td>
        <td>Induction Program</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110018</td>
        <td>Physics</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
    </table>

    <br>

    <table border="1" width="100%"  id="t93">
      <tr>
        <td>SEM 4</td>
      </tr>
    </table>
    <br>
    <table border="1" width="100%"  >
      <tr>
        <td>WINTER - 2020 (SEAT NO : 200200107095)</td>
        <td>CUR. BACKLOG : 0</td>
      </tr>
    </table>
    <table border="1" width="100%" id="t94" >
      <tr>
        <td>SUB CODE</td>
        <td>SUBJECT NAME</td>
        <td>E_AB</td>
        <td>TH ESE</td>
        <td>TH PA</td>
        <td>TH TOTAL</td>
        <td>PR ESE</td>
        <td>PR PA</td>
        <td>PR TOTAL</td>
        <td>PR TOTAL</td>
      </tr>
      <tr>
        <td>3110005</td>
        <td>Basic Electrical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110006</td>
        <td>Basic Mechanical Engineering</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110012</td>
        <td>Workshop / Manufacturing Practise</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110014</td>
        <td>Mathematics - 1</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110017</td>
        <td>Induction Program</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
      <tr>
        <td>3110018</td>
        <td>Physics</td>
        <td>-</td>
        <td>AA</td>
        <td>AB</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
        <td>AA</td>
      </tr>
    </table>
    `;
  } else {
    alert("plz enter correct captcha");
  }
}
