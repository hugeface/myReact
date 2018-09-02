var component = {
    root: document.getElementById('root'),
    data: 'Jack',
    setData: function(key, val) {
        var _t = this;
        _t.data[key] = val;
    },
    render: function() {
        var _t = this;
        var template = `<div>hello, world</div>`;
        _t.root.innerHTML = template;
    }
};

component.render();