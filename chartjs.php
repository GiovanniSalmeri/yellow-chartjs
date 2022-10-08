<?php
// Chartjs extension, https://github.com/GiovanniSalmeri/yellow-chartjs

class YellowChartjs {
    const VERSION = "0.8.20";
    public $yellow;         // access to API

    public function onLoad($yellow) {
        $this->yellow = $yellow;
    }

    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name=="header") {
            $extensionLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreExtensionLocation");
            $output = "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"{$extensionLocation}chartjs.css\" />\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$extensionLocation}chartjs-init.js\"></script>\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$extensionLocation}chartjs.min.js\"></script>\n";
        }
        return $output;
    }
}
