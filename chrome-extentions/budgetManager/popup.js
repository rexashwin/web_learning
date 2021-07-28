$(function () {

    // get object from chrome storage API
    chrome.storage.sync.get(['total', 'limit'], function (budget) {
        // to set value of total when opens the extention
        $('#total').text(budget.total);
        // to set value of limit when opens the extention
        $('#limit').text(budget.limit);
    });

    $('#spendAmount').click(function () {
        // get total and limit from chrome storage api
        chrome.storage.sync.get(['total', 'limit'], function (budget) {
            var newTotal = 0;
            // if total value is present already then new total will be total + new entered value = newTotal
            if (budget.total) {
                newTotal += parseInt(budget.total);
            }

            var amount = $('#amount').val();
            // takes the entered amount from input and add it to the new total
            if (amount) {
                newTotal += parseInt(amount);
            }

            // set the total value using chrome storage API
            chrome.storage.sync.set({ 'total': newTotal }, function () {
                // if the total value is reached or crossed the limit this will give notification
                if (amount && newTotal >= budget.limit) {
                    // creating basic type notificaton object
                    var notifOptions = {
                        type: "basic",
                        iconUrl: "icon48.png",
                        title: "Limit reached!",
                        message: "Uh oh, look's like you've reached your alloted limit."
                    };
                    // this will give notification using chrome API
                    chrome.notifications.create('limitNotif', notifOptions);
                }
            });
            // set the value of total to newTotal and amount input to blank
            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});