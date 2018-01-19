<template>

  <div>

    {{ message }}

    <label>
      version:
    </label>
    <select v-model="srcType" v-on:change="change">
      <option value="stable">stable 0.0.1</option>
      <option value="master">master 0.0.1-dev</option>
    </select>

    <hr />

    <div class="aq-container">

      <h1>platform-css-test</h1>

      <div aq-grid>

        <div class="aq-width-1-3@m">

          <h2>New component</h2>

          <button class="aq-button aq-button-primary" aq-hello-world>hello</button>

        </div>

        <div class="aq-width-1-3@m">

          <h2>Accordion</h2>

          <ul aq-accordion>
            <li class="aq-open">
              <a class="aq-accordion-title" href="#">Item 1</a>
              <div class="aq-accordion-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </li>
            <li>
              <a class="aq-accordion-title" href="#">Item 2</a>
              <div class="aq-accordion-content">
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
              </div>
            </li>
            <li>
              <a class="aq-accordion-title" href="#">Item 3</a>
              <div class="aq-accordion-content">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
              </div>
            </li>
          </ul>

        </div>

        <div class="aq-width-1-3@m">

          <h2>Alert</h2>

          <div aq-alert>
            <a href="#" class="aq-alert-close" aq-close></a>
            <p><strong>Alert!</strong> Lorem ipsum <a href="#">dolor</a> sit amet... </p>
          </div>

          <div class="aq-alert-primary" aq-alert>
            <a href="#" class="aq-alert-close" aq-close></a>
            <p><strong>Primary!</strong> Lorem ipsum <a href="#">dolor</a> sit amet... </p>
          </div>

          <div class="aq-alert-success" aq-alert>
            <a href="#" class="aq-alert-close" aq-close></a>
            <p><strong>Success!</strong> Lorem ipsum <a href="#">dolor</a> sit amet... </p>
          </div>

          <div class="aq-alert-warning" aq-alert>
            <a href="#" class="aq-alert-close" aq-close></a>
            <p><strong>Warning!</strong> Lorem ipsum <a href="#">dolor</a> sit amet... </p>
          </div>

          <div class="aq-alert-danger" aq-alert>
            <a href="#" class="aq-alert-close" aq-close></a>
            <p><strong>Danger!</strong> Lorem ipsum <a href="#">dolor</a> sit amet... </p>
          </div>

        </div>

      </div>

      <div aq-grid>

        <div class="aq-width-1-3@m">

          <h2>Aq Icons</h2>

          <ul class="aq-list">
            <li><span class="aq-margin-small-right" aq-icon="icon: activity"></span> activity</li>
            <li><span class="aq-margin-small-right" aq-icon="icon: add--circle"></span> add--circle</li>
            <li><span class="aq-margin-small-right" aq-icon="icon: add--database"></span> add--database</li>
            <li><span class="aq-margin-small-right" aq-icon="icon: add--environment"></span> add--environment</li>
            <li><span class="aq-margin-small-right" aq-icon="icon: product--cloud"></span> product--cloud</li>
          </ul>

        </div>

        <div class="aq-width-1-3@m">

          <h2>Text-level semantics</h2>

          <ul class="aq-list">
            <li>The
              <a href="#">
                <span aq-icon="icon: happy"></span>
                a element
              </a>
              example
            </li>
            <li>The
              <a class="aq-link-muted" href="#">
                <span aq-icon="icon: happy"></span>
                link-muted
              </a>
              example
            </li>
            <li>The
              <a class="aq-link-reset" href="#">
                <span aq-icon="icon: happy"></span>
                link-reset
              </a>
              example
            </li>
            <li>The
              <code>
                <span aq-icon="icon: happy"></span>
                code element
              </code>
              example
            </li>
            <li>The
              <em>
                <span aq-icon="icon: happy"></span>
                em element
              </em>
              example
            </li>
          </ul>

        </div>

        <div class="aq-width-1-3@m">

          <h2>Buttons</h2>

          <ul class="aq-list">
            <li>
              <button class="aq-button aq-button-default">
                <span class="aq-margin-small-right" aq-icon="icon: happy"></span>
                Button
              </button>
            </li>
            <li>
              <button class="aq-button aq-button-primary">
                <span class="aq-margin-small-right" aq-icon="icon: happy"></span>
                Button
              </button>
            </li>
            <li>
              <button class="aq-button aq-button-danger">
                <span class="aq-margin-small-right" aq-icon="icon: happy"></span>
                Button
              </button>
            </li>
            <li>
              <button class="aq-button aq-button-secondary">
                <span class="aq-margin-small-right" aq-icon="icon: happy"></span>
                Button
              </button>
            </li>
            <li>
              <button class="aq-button aq-button-default" disabled>
                <span class="aq-margin-small-right" aq-icon="icon: happy"></span>
                Button
              </button>
            </li>
          </ul>

        </div>

      </div>

      <div aq-grid>

        <div class="aq-width-1-3@m">

          <h2>Badge</h2>

          <p>
            <a class="aq-badge" href="#">1</a>
            <span class="aq-badge">2</span>
            <span class="aq-badge">10</span>
            <span class="aq-badge">100</span>
            <span class="aq-badge"><span aq-icon="icon: happy"></span></span>
            <span class="aq-badge">text</span>
          </p>

        </div>

        <div class="aq-width-1-3@m">

          <h2>Label</h2>

          <span class="aq-label">Default</span>
          <span class="aq-label aq-label-success">Success</span>
          <span class="aq-label aq-label-warning">Warning</span>
          <span class="aq-label aq-label-danger">Danger</span>

        </div>

        <div class="aq-width-1-3@m">

          <h2>Spinner</h2>

          <div aq-spinner="ratio: 0.5"></div>
          <div aq-spinner></div>
          <div aq-spinner="ratio: 1.5"></div>
          <div aq-spinner="ratio: 2"></div>

        </div>


      </div>

    </div>

  </div>

</template>
