var View = {

    init: function ()
    {
        this.reset();
        /* register event listeners */
        $("#grid td").click(ViewController.onGridClick)
        $("#mode input[name=player]:radio").change(ViewController.onModeChange);
        $("#sign input[name=character]:radio").change(ViewController.onCharacterChange);
        
        // focus input to mode selection
        $('#mode input[name=player]:radio').focus();
    },

    updateUI: function (element, val)
    {
        document.getElementById(element).innerHTML = val;
    },

    alertUser: function (msg)
    {
        alert(msg);
    },

    reset: function ()
    {
        $("#grid td").each(function ()
        {
            this.innerHTML = "";
        });
    },

    clearScore: function ()
    {
        document.getElementById('x_score').innerHTML = 0;
        document.getElementById('o_score').innerHTML = 0;
    },

    showHide: function (element, isShowing)
    {
        var ele = document.getElementById(element);
        if (isShowing && ele)
        {
            ele.style.display = 'block';
        }
        else
        {
            ele.style.display = 'none';
        }
    }
};