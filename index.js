setTimeout(() => {
    let tableBody = document.getElementById("tablebody");
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'wordsapi_sample.json', true);
    xhr.onload = function () {
        if (this.status == 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj)
            let str = "";
            for (mkey in obj) {
                if (obj[mkey].definitions != undefined) {
                    obj[mkey].definitions.forEach((element, index) => {
                        for (const key in element) {
                            if (key === 'definition') {
                                str += `<tr scope="row">
                        <td>${mkey}</td>
                        <td>${element[key]}</td>
                        </tr>`
                            }
                        }
                    })
                };

            }
            tableBody.innerHTML = str;
        }
    }
    xhr.send();

}, 100);