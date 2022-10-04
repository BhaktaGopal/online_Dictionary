// code for fetching words 
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

// code for search bar

let searchbtn = document.getElementById("searchbtn");
        searchbtn.addEventListener('click', () => {

            setTimeout(() => {
                let tableBody = document.getElementById("tablebody");
                let inputWord = document.getElementById("word");
                // console.log(inputWord.value);
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'wordsapi_sample.json', true);
                xhr.onload = function () {
                    if (this.status == 200) {
                        let obj = JSON.parse(this.responseText);
                        // console.log(obj)
                        let str = "";
                        for (mkey in obj) {
                            if (obj[mkey].definitions != undefined) {
                                obj[mkey].definitions.forEach((element, index) => {
                                    for (const key in element) {
                                        console.log(mkey);
                                        if (key === 'definition' && mkey.toLowerCase() == inputWord.value.toLowerCase()) {
                                            str += `<tr scope="row">
                                                        <td>${mkey}</td>
                                                        <td>${element[key]}</td>
                                                    </tr>`
                                            let message = document.getElementById("message");
                                            message.innerHTML = `
                                                                    <div class="alert alert-info alert-dismissible fade show" role="alert">
                                                                        <strong>Message !</strong> Search results 
                                                                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                                    </div>
                                                                    `;
                                            setTimeout(() => {
                                                message.innerHTML = '';
                                            }, 2000);
                                        } else {

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

        })
