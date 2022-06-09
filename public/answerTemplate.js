(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['answer'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"answer-text\" id=\"answer-text\">\n    <a><strong>Answer:</strong><em>"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"number") || (depth0 != null ? lookupProperty(depth0,"number") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"number","hash":{},"data":data,"loc":{"start":{"line":2,"column":35},"end":{"line":2,"column":45}}}) : helper)))
    + "</em></a>\n</div>";
},"useData":true});
})();