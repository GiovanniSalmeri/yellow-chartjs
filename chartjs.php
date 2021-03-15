<?php
// Chartjs extension, https://github.com/GiovanniSalmeri/yellow-chartjs

class YellowChartjs {
    const VERSION = "0.8.16";
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
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$extensionLocation}chartjs.js\"></script>\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.bundle.min.js\"></script>\n";
        }
        return $output;
    }
}
