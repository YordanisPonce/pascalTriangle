function enabledPopover() {
    let data = `<p class="text-large">Yordanis Ponce Alderete</p>
                <p class="text-large">Leandro Jeanpierre De la Peña Calero</p>            
    `;
    $("#popover").attr("data-bs-content", data);
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, { html: true });
    });
}
function createTriangle() {
    if ($("#row").val() == "") {
        $("#validator").removeClass("d-none");
    } else {
        $("#validator").addClass("d-none");
        let row = parseInt($("#row").val())
        let col = parseInt($("#col").val());
        let numbers = [[1], [1, 1]];
        if (row < 9 && $(window).width() > 768) {
            $("#triangle").addClass("text-center");
        } else if (row <= 4 && $(window).width() <= 768) {
            $("#triangle").addClass("text-center");
        } else {
            $("#triangle").removeClass("text-center");
        }
        for (let i = 0; i < row; i++) {
            let elements = [];
            if (numbers[i].length > 1) {
                elements.push(1);
                for (let j = 0; j < numbers[i].length; j++) {
                    if (j > 0) {
                        elements.push(parseInt(numbers[i][j] + numbers[i][j - 1]));
                    }
                }
                elements.push(1);
                numbers.push(elements);
            }

        }
        $("#triangle").html("");

        for (let i = 0; i < numbers.length; i++) {
            let data = `<span>`;
            if (col == 0 && (i + 1) == numbers.length) {
                data = `<span class='bg-primary text-white rounded'>`;
            }
            for (let j = 0; j < numbers[i].length; j++) {
                if (j + 1 == col && (i + 1) == numbers.length) {
                    data += numbers[i][j] + "</span><span class='bg-primary text-white rounded'>";
                } else {
                    data += numbers[i][j] + "</span><span>";
                }


            }
            $("#triangle").append(`<p class="text-primary" style="font-weight: bold;font-size: 18px;">${data}</p>`);

        }

    }
}