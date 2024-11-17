import meta from "../../../pages/_meta.ts";
import vzn_cleanerjob_meta from "../../../pages/vzn-cleanerjob/_meta.ts";
import vzn_references_meta from "../../../pages/vzn-references/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "vzn-cleanerjob",
  route: "/vzn-cleanerjob",
  children: [{
    data: vzn_cleanerjob_meta
  }, {
    name: "config",
    route: "/vzn-cleanerjob/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }, {
    name: "framework",
    route: "/vzn-cleanerjob/framework",
    frontMatter: {
      "sidebarTitle": "Framework"
    }
  }]
}, {
  name: "vzn-cleanerjob",
  route: "/vzn-cleanerjob",
  frontMatter: {
    "sidebarTitle": "Vzn Cleanerjob"
  }
}, {
  name: "vzn-notify",
  route: "/vzn-notify",
  children: [{
    name: "api",
    route: "/vzn-notify/api",
    frontMatter: {
      "sidebarTitle": "API"
    }
  }, {
    name: "designs",
    route: "/vzn-notify/designs",
    frontMatter: {
      "sidebarTitle": "Designs"
    }
  }, {
    name: "Integration",
    route: "/vzn-notify/Integration",
    children: [{
      name: "esx",
      route: "/vzn-notify/Integration/esx",
      frontMatter: {
        "sidebarTitle": "Esx"
      }
    }, {
      name: "ox_lib",
      route: "/vzn-notify/Integration/ox_lib",
      frontMatter: {
        "sidebarTitle": "Ox Lib"
      }
    }, {
      name: "qb-core",
      route: "/vzn-notify/Integration/qb-core",
      frontMatter: {
        "sidebarTitle": "Qb Core"
      }
    }]
  }]
}, {
  name: "vzn-notify",
  route: "/vzn-notify",
  frontMatter: {
    "sidebarTitle": "Vzn Notify"
  }
}, {
  name: "vzn-references",
  route: "/vzn-references",
  children: [{
    data: vzn_references_meta
  }, {
    name: "config",
    route: "/vzn-references/config",
    frontMatter: {
      "sidebarTitle": "Config"
    }
  }, {
    name: "custom_reward",
    route: "/vzn-references/custom_reward",
    frontMatter: {
      "sidebarTitle": "Custom Reward"
    }
  }, {
    name: "framework",
    route: "/vzn-references/framework",
    frontMatter: {
      "sidebarTitle": "Framework"
    }
  }]
}, {
  name: "vzn-references",
  route: "/vzn-references",
  frontMatter: {
    "sidebarTitle": "Vzn References"
  }
}];