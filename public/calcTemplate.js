(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['calc'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<article class=\"calc\">\n            <div class=\"calc-content\">\n                <p class=\"calc-name\">\n                    <a href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":4,"column":32},"end":{"line":4,"column":40}}}) : helper)))
    + "</a>\n                </p>\n                <p class=\"calc-description\">\n                    "
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":7,"column":20},"end":{"line":7,"column":35}}}) : helper)))
    + "\n                </p>\n                <p class=\"hidden calc-equation\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"equation") || (depth0 != null ? lookupProperty(depth0,"equation") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"equation","hash":{},"data":data,"loc":{"start":{"line":9,"column":48},"end":{"line":9,"column":60}}}) : helper)))
    + "</p> \n            </div>\n</article>";
},"useData":true});
})();