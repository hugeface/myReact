var component = {
    root: document.getElementById('root'),
    data: {
        name: 'Jack'
    },
    setData: function(key, val) {
        var _t = this;
        _t.data[key] = val;
        _t.render();
    },
    render: function() {
        var _t = this;
        var template = `<h1>hello, {name}!</h1>`;
        var html = template.replace(/\{.*\}/g, function (res) {
            var key = res.substr(1, res.length - 2);
            return _t.data[key];
        })
        _t.root.innerHTML = html;
    }
};

component.render();

setTimeout(function () {
    component.setData('name', 'React');
}, 2000);