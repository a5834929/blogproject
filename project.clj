(defproject blogproject "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "https://brevity-blog.herokuapp.com"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :min-lein-version "2.7.1"
  :profiles {:dev [:project/dev :profiles/dev]
             :test [:project/test :profiles/test]
             :uberjar {:main blogproject.clj.core :aot :all}
                       ; :auto-clean false}
             ;; only edit :profiles/* in profiles.clj
             :profiles/dev  {}
             :profiles/test {}
             :project/dev {:source-paths ["src" "tool-src"]
                           :plugins [[lein-auto "LATEST"]]}
             :project/test {}}
  :aliases {"brevity" ["run" "-m" "brevity.core/handle-commands" :project/main]}
  :resource-paths ["resources"]
  :main blogproject.clj.core
  :uberjar-name "blogproject-standalone.jar"
  :dependencies [[org.clojure/clojure "LATEST"]
                 [org.immutant/web "LATEST"]
                 [ring/ring-core "LATEST"]
                 [ring/ring-devel "LATEST"]
                 [ring/ring-json "LATEST"]
                 [compojure "LATEST"]
                 ;;[com.opentable.components/otj-pg-embedded "LATEST"]
                 [org.postgresql/postgresql "42.2.5.jre7"]
                 [migratus "LATEST"]
                 [com.layerware/hugsql "LATEST"]
                 [hugsql-adapter-case "LATEST"]
                 [conman "LATEST"]
                 [buddy/buddy-auth "LATEST"]
                 [buddy/buddy-sign "LATEST"]
                 [buddy/buddy-hashers "LATEST"]
                 [crypto-random "LATEST"]
                 [io.forward/yaml "LATEST"]
                 [camel-snake-kebab "LATEST"]
                 [org.clojure/spec.alpha "LATEST"]
                 [org.clojure/java.jdbc "LATEST"]
                 [stencil "0.5.0"]
                 [org.clojure/clojurescript "LATEST"]
                 [hiccup "LATEST"]
                 [garden "LATEST"]
                 [reagent "LATEST"]
                 [reagent-utils "LATEST"]
                 [cljs-http "LATEST"]
                 [bidi "LATEST"]
                 [venantius/accountant "LATEST"]
                 [environ "LATEST"]]
  :clean-targets ^{:protect false} ["resources/public/js/development"
                                    "resources/public/js/release"
                                    "target"]
  :plugins [[lein-cljsbuild "LATEST"]
            [lein-environ "LATEST"]
            [lein-cljfmt "LATEST"]
            [lein-figwheel "LATEST"]]
  :cljfmt {:indents {#".*" [[:block 0]]}}
  :cljsbuild {:builds
              [{:id "dev"
                :source-paths ["src/blogproject/cljs"]
                :figwheel true
                :compiler
                {:output-to "resources/public/js/development/index.js"
                 :source-map true
                 :output-dir "resources/public/js/development"
                 :optimizations :none
                 :main blogproject.cljs.core
                 :asset-path "/js/development"
                 :infer-externs false
                 :cache-analysis true
                 :pretty-print true}}
               {:id "release"
                :source-paths ["src/blogproject/cljs"]
                :compiler
                {:output-to "resources/public/js/release/index.js"
                 :source-map "resources/public/js/release/index.js.map"
                 :externs ["externs/externs.js"]
                 :main blogproject.cljs.core
                 :output-dir "resources/public/js/release"
                 :optimizations :advanced
                 :pseudo-names false}}]})
