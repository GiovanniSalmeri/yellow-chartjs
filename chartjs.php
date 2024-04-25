<?php
// Chartjs extension, https://github.com/GiovanniSalmeri/yellow-chartjs

class YellowChartjs {
    const VERSION = "0.9.1";
    public $yellow;         // access to API

    public function onLoad($yellow) {
        $this->yellow = $yellow;
    }

    // Handle page extra data
    public function onParsePageExtra($page, $name) {
        $output = null;
        if ($name=="header") {
            $assetLocation = $this->yellow->system->get("coreServerBase").$this->yellow->system->get("coreAssetLocation");
            $output = "<link rel=\"stylesheet\" type=\"text/css\" media=\"all\" href=\"{$assetLocation}chartjs.css\" />\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$assetLocation}chartjs-init.js\"></script>\n";
            $output .= "<script type=\"text/javascript\" defer=\"defer\" src=\"{$assetLocation}chartjs.min.js\"></script>\n";
        }
        return $output;
    }
}
