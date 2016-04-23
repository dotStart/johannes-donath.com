/*
 * Copyright 2016 Johannes Donath <johannesd@torchmind.com>
 * and other copyright owners as documented in the project's IP log.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * 	http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Component} from "angular2/core";
import {CodeService} from "./code.service";
import {PageComponent} from "./page.component";
import {ComponentInstruction} from "angular2/router";
declare const $:any;

@Component({
        templateUrl: 'partial/index.html',
        providers:   [CodeService]
})
export class IndexComponent extends PageComponent{
        private codeService : CodeService;

        constructor(private _codeService : CodeService) {
                super();

                this.codeService = _codeService;
        }

        /**
         * {@inheritDoc}
         */
        routerOnActivate(nextInstruction:ComponentInstruction, prevInstruction:ComponentInstruction):any|Promise<any> {
                return super.routerOnActivate(nextInstruction, prevInstruction).then($.proxy(function() {
                        this.codeService.printCode('#code-container > pre > .content');
                }, this));
        }
}