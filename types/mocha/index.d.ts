// Type definitions for mocha 5.2
// Project: https://mochajs.org
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid>
//                 otiai10 <https://github.com/otiai10>
//                 jt000 <https://github.com/jt000>
//                 Vadim Macagon <https://github.com/enlight>
//                 Andrew Bradley <https://github.com/cspotcode>
//                 Dmitrii Sorin <https://github.com/1999>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Mocha API
 *
 * @see https://mochajs.org/api/mocha
 */
declare class Mocha {
    private _growl;
    private _reporter;
    private _ui;

    constructor(options?: Mocha.MochaOptions);

    suite: Mocha.Suite;
    files: string[];
    options: Mocha.MochaInstanceOptions;

    /**
     * Enable or disable bailing on the first failure.
     *
     * @see https://mochajs.org/api/mocha#bail
     */
    bail(bail?: boolean): this;

    /**
     * Add test `file`.
     *
     * @see https://mochajs.org/api/mocha#addFile
     */
    addFile(file: string): this;

    /**
     * Set reporter to one of the built-in reporters.
     *
     * @see https://mochajs.org/api/mocha#reporter
     */
    reporter(reporter: Mocha.Reporter, reporterOptions?: any): this;

    /**
     * Set reporter to the provided constructor, one of the built-in reporters, or loads a reporter
     * from a module path. Defaults to `"spec"`.
     *
     * @see https://mochajs.org/api/mocha#reporter
     */
    reporter(reporter?: string | Mocha.ReporterConstructor, reporterOptions?: any): this;

    /**
     * Set test UI to one of the built-in test interfaces.
     *
     * @see https://mochajs.org/api/mocha#ui
     */
    ui(name: Mocha.Interface): this;

    /**
     * Set test UI to one of the built-in test interfaces or loads a test interface from a module
     * path. Defaults to `"bdd"`.
     *
     * @see https://mochajs.org/api/mocha#ui
     */
    ui(name?: string): this;

    /**
     * Escape string and add it to grep as a RegExp.
     *
     * @see https://mochajs.org/api/mocha#fgrep
     */
    fgrep(str: string): this;

    /**
     * Add regexp to grep, if `re` is a string it is escaped.
     *
     * @see https://mochajs.org/api/mocha#grep
     */
    grep(re: string | RegExp): this;

    /**
     * Invert `.grep()` matches.
     *
     * @see https://mochajs.org/api/mocha#invert
     */
    invert(): this;

    /**
     * Ignore global leaks.
     *
     * @see https://mochajs.org/api/mocha#ignoreLeaks
     */
    ignoreLeaks(ignore: boolean): this;

    /**
     * Enable global leak checking.
     *
     * @see https://mochajs.org/api/mocha#checkLeaks
     */
    checkLeaks(): this;

    /**
     * Display long stack-trace on failing
     *
     * @see https://mochajs.org/api/mocha#fullTrace
     */
    fullTrace(): this;

    /**
     * Enable growl support.
     *
     * @see https://mochajs.org/api/mocha#growl
     */
    growl(): this;

    /**
     * Ignore `globals` array or string.
     *
     * @see https://mochajs.org/api/mocha#globals
     */
    globals(globals: string | ReadonlyArray<string>): this;

    /**
     * Emit color output.
     *
     * @see https://mochajs.org/api/mocha#useColors
     */
    useColors(colors: boolean): this;

    /**
     * Use inline diffs rather than +/-.
     *
     * @see https://mochajs.org/api/mocha#useInlineDiffs
     */
    useInlineDiffs(inlineDiffs: boolean): this;

    /**
     * Do not show diffs at all.
     *
     * @see https://mochajs.org/api/mocha#hideDiff
     */
    hideDiff(hideDiff: boolean): this;

    /**
     * Set the timeout in milliseconds.
     *
     * @see https://mochajs.org/api/mocha#timeout
     */
    timeout(timeout: string | number): this;

    /**
     * Set the number of times to retry failed tests.
     *
     * @see https://mochajs.org/api/mocha#retries
     */
    retries(n: number): this;

    /**
     * Set slowness threshold in milliseconds.
     *
     * @see https://mochajs.org/api/mocha#slow
     */
    slow(slow: string | number): this;

    /**
     * Enable timeouts.
     *
     * @see https://mochajs.org/api/mocha#enableTimeouts
     */
    enableTimeouts(enabled?: boolean): this;

    /**
     * Makes all tests async (accepting a callback)
     *
     * @see https://mochajs.org/api/mocha#asyncOnly.
     */
    asyncOnly(): this;

    /**
     * Disable syntax highlighting (in browser).
     *
     * @see https://mochajs.org/api/mocha#noHighlighting
     */
    noHighlighting(): this;

    /**
     * Enable uncaught errors to propagate (in browser).
     *
     * @see https://mochajs.org/api/mocha#allowUncaught
     */
    allowUncaught(): boolean;

    /**
     * Delay root suite execution.
     *
     * @see https://mochajs.org/api/mocha#delay
     */
    delay(): boolean;

    /**
     * Tests marked only fail the suite
     *
     * @see https://mochajs.org/api/mocha#forbidOnly
     */
    forbidOnly(): boolean;

    /**
     * Pending tests and tests marked skip fail the suite
     *
     * @see https://mochajs.org/api/mocha#forbidPending
     */
    forbidPending(): boolean;

    /**
     * Run tests and invoke `fn()` when complete.
     *
     * Note that `run` relies on Node's `require` to execute
     * the test interface functions and will be subject to the
     * cache - if the files are already in the `require` cache,
     * they will effectively be skipped. Therefore, to run tests
     * multiple times or to run tests in files that are already
     * in the `require` cache, make sure to clear them from the
     * cache first in whichever manner best suits your needs.
     *
     * @see https://mochajs.org/api/mocha#run
     */
    run(fn?: (failures: number) => void): Mocha.Runner;

    /**
     * Load registered files.
     *
     * @see https://mochajs.org/api/mocha#loadFiles
     */
    protected loadFiles(fn?: () => void): void;
}

declare namespace Mocha {
    namespace utils {
        /**
         * Compute a slug from the given `str`.
         *
         * @see https://mochajs.org/api/module-utils.html#.slug
         */
        function slug(str: string): string;

        /**
         * Strip the function definition from `str`, and re-indent for pre whitespace.
         *
         * @see https://mochajs.org/api/module-utils.html#.clean
         */
        function clean(str: string): string;

        /**
         * Highlight the given string of `js`.
         */
        function highlight(js: string): string;

        /**
         * Takes some variable and asks `Object.prototype.toString()` what it thinks it is.
         */
        function type(value: any): string;

        /**
         * Stringify `value`. Different behavior depending on type of value:
         *
         * - If `value` is undefined or null, return `'[undefined]'` or `'[null]'`, respectively.
         * - If `value` is not an object, function or array, return result of `value.toString()` wrapped in double-quotes.
         * - If `value` is an *empty* object, function, or array, returns `'{}'`, `'[Function]'`, or `'[]'` respectively.
         * - If `value` has properties, call canonicalize} on it, then return result of `JSON.stringify()`
         *
         * @see https://mochajs.org/api/module-utils.html#.stringify
         */
        function stringify(value: any): string;

        /**
         * Return a new Thing that has the keys in sorted order. Recursive.
         *
         * If the Thing...
         * - has already been seen, return string `'[Circular]'`
         * - is `undefined`, return string `'[undefined]'`
         * - is `null`, return value `null`
         * - is some other primitive, return the value
         * - is not a primitive or an `Array`, `Object`, or `Function`, return the value of the Thing's `toString()` method
         * - is a non-empty `Array`, `Object`, or `Function`, return the result of calling this function again.
         * - is an empty `Array`, `Object`, or `Function`, returns `'[]'`, `'{}'`, or `'[Function]'` respectively.
         *
         * @see https://mochajs.org/api/module-utils.html#.canonicalize
         */
        function canonicalize(value: any, stack: any[], typeHint: string): any;

        /**
         * Lookup file names at the given `path`.
         *
         * @see https://mochajs.org/api/Mocha.utils.html#.exports.lookupFiles
         */
        function lookupFiles(filepath: string, extensions?: string[], recursive?: boolean): string[];

        /**
         * Generate an undefined error with a message warning the user.
         *
         * @see https://mochajs.org/api/module-utils.html#.undefinedError
         */
        function undefinedError(): Error;

        /**
         * Generate an undefined error if `err` is not defined.
         *
         * @see https://mochajs.org/api/module-utils.html#.getError
         */
        function getError(err: Error | undefined): Error;

        /**
         * When invoking this function you get a filter function that get the Error.stack as an
         * input, and return a prettify output. (i.e: strip Mocha and internal node functions from
         * stack trace).
         *
         * @see https://mochajs.org/api/module-utils.html#.stackTraceFilter
         */
        function stackTraceFilter(): (stack: string) => string;
    }

    namespace interfaces {
        function bdd(suite: Suite): void;
        function tdd(suite: Suite): void;
        function qunit(suite: Suite): void;
        function exports(suite: Suite): void;
    }

    // #region Test interface augmentations

    interface HookFunction {
        /**
         * [bdd, qunit, tdd] Describe a "hook" to execute the given callback `fn`. The name of the
         * function is used as the name of the hook.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (fn: Func | AsyncFunc): void;

        /**
         * [bdd, qunit, tdd] Describe a "hook" to execute the given `title` and callback `fn`.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (name: string, fn?: Func | AsyncFunc): void;
    }

    interface SuiteFunction {
        /**
         * [bdd, tdd] Describe a "suite" with the given `title` and callback `fn` containing
         * nested suites.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string, fn: (this: Suite) => void): Suite;

        /**
         * [qunit] Describe a "suite" with the given `title`.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string): Suite;

        /**
         * [bdd, tdd, qunit] Indicates this suite should be executed exclusively.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        only: ExclusiveSuiteFunction;

        /**
         * [bdd, tdd] Indicates this suite should not be executed.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        skip: PendingSuiteFunction;
    }

    interface ExclusiveSuiteFunction {
        /**
         * [bdd, tdd] Describe a "suite" with the given `title` and callback `fn` containing
         * nested suites. Indicates this suite should be executed exclusively.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string, fn: (this: Suite) => void): Suite;

        /**
         * [qunit] Describe a "suite" with the given `title`. Indicates this suite should be executed
         * exclusively.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string): Suite;
    }

    /**
     * [bdd, tdd] Describe a "suite" with the given `title` and callback `fn` containing
     * nested suites. Indicates this suite should not be executed.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @returns [bdd] `Suite`
     * @returns [tdd] `void`
     */
    interface PendingSuiteFunction {
        (title: string, fn: (this: Suite) => void): Suite | void;
    }

    interface TestFunction {
        /**
         * Describe a specification or test-case with the given callback `fn` acting as a thunk.
         * The name of the function is used as the name of the test.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (fn: Func | AsyncFunc): Test;

        /**
         * Describe a specification or test-case with the given `title` and callback `fn` acting
         * as a thunk.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string, fn?: Func | AsyncFunc): Test;

        /**
         * Indicates this test should be executed exclusively.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        only: ExclusiveTestFunction;

        /**
         * Indicates this test should not be executed.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        skip: PendingTestFunction;

        /**
         * Number of attempts to retry.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        retries(n: number): void;
    }

    interface ExclusiveTestFunction {
        /**
         * [bdd, tdd, qunit] Describe a specification or test-case with the given callback `fn`
         * acting as a thunk. The name of the function is used as the name of the test. Indicates
         * this test should be executed exclusively.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (fn: Func | AsyncFunc): Test;

        /**
         * [bdd, tdd, qunit] Describe a specification or test-case with the given callback `fn`
         * acting as a thunk. The name of the function is used as the name of the test. Indicates
         * this test should be executed exclusively.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string, fn?: Func | AsyncFunc): Test;
    }

    interface PendingTestFunction {
        /**
         * [bdd, tdd, qunit] Describe a specification or test-case with the given callback `fn`
         * acting as a thunk. The name of the function is used as the name of the test. Indicates
         * this test should not be executed.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (fn: Func | AsyncFunc): Test;

        /**
         * [bdd, tdd, qunit] Describe a specification or test-case with the given callback `fn`
         * acting as a thunk. The name of the function is used as the name of the test. Indicates
         * this test should not be executed.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        (title: string, fn?: Func | AsyncFunc): Test;
    }

    /**
     * Execute after each test case.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#afterEach
     */
    let afterEach: HookFunction;

    /**
     * Execute after running tests.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#after
     */
    let after: HookFunction;

    /**
     * Execute before each test case.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#beforeEach
     */
    let beforeEach: HookFunction;

    /**
     * Execute before running tests.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#before
     */
    let before: HookFunction;

    /**
     * Describe a "suite" containing nested suites and tests.
     *
     * - _Only available when invoked via the mocha CLI._
     */
    let describe: SuiteFunction;

    /**
     * Describes a test case.
     *
     * - _Only available when invoked via the mocha CLI._
     */
    let it: TestFunction;

    /**
     * Describes a pending test case.
     *
     * - _Only available when invoked via the mocha CLI._
     */
    let xit: PendingTestFunction;

    /**
     * Execute before each test case.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#beforeEach
     */
    let setup: HookFunction;

    /**
     * Execute before running tests.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#before
     */
    let suiteSetup: HookFunction;

    /**
     * Execute after running tests.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#after
     */
    let suiteTeardown: HookFunction;

    /**
     * Describe a "suite" containing nested suites and tests.
     *
     * - _Only available when invoked via the mocha CLI._
     */
    let suite: SuiteFunction;

    /**
     * Execute after each test case.
     *
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#afterEach
     */
    let teardown: HookFunction;

    /**
     * Describes a test case.
     *
     * - _Only available when invoked via the mocha CLI._
     */
    let test: TestFunction;

    /**
     * Triggers root suite execution.
     *
     * - _Only available if flag --delay is passed into Mocha._
     * - _Only available when invoked via the mocha CLI._
     *
     * @see https://mochajs.org/api/global.html#runWithSuite
     */
    function run(): void;

    // #endregion Test interface augmentations

    namespace reporters {
        /**
         * Initialize a new `Base` reporter.
         *
         * All other reporters generally inherit from this reporter, providing stats such as test duration,
         * number of tests passed / failed, etc.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Base.html
         */
        class Base {
            constructor(runner: Runner, options?: MochaOptions);
            /** @deprecated Use the overload that accepts `Mocha.Runner` instead. */
            constructor(runner: IRunner, options?: MochaOptions);

            /**
             * Test run statistics
             */
            stats: Stats;

            /**
             * Test failures
             */
            failures: Test[];

            /**
             * The configured runner
             */
            runner: Runner;

            /**
             * Output common epilogue used by many of the bundled reporters.
             *
             * @see https://mochajs.org/api/Mocha.reporters.Base.html#.Base#epilogue
             */
            epilogue(): void;

            done?(failures: number, fn?: (failures: number) => void): void;
        }

        namespace Base {
            /**
             * Enables coloring by default
             *
             * @see https://mochajs.org/api/module-base#.useColors
             */
            let useColors: boolean;

            /**
             * Inline diffs instead of +/-
             *
             * @see https://mochajs.org/api/module-base#.inlineDiffs
             */
            let inlineDiffs: boolean;

            /**
             * Default color map
             *
             * @see https://mochajs.org/api/module-base#.colors
             */
            const colors: ColorMap;

            /**
             * Default color map
             *
             * @see https://mochajs.org/api/module-base#.colors
             */
            interface ColorMap {
                // added by Base
                pass: number;
                fail: number;
                "bright pass": number;
                "bright fail": number;
                "bright yellow": number;
                pending: number;
                suite: number;
                "error title": number;
                "error message": number;
                "error stack": number;
                checkmark: number;
                fast: number;
                medium: number;
                slow: number;
                green: number;
                light: number;
                "diff gutter": number;
                "diff added": number;
                "diff removed": number;

                // added by Progress
                progress: number;

                // added by Landing
                plane: number;
                "plane crash": number;
                runway: number;

                [key: string]: number;
            }

            /**
             * Default symbol map
             *
             * @see https://mochajs.org/api/module-base#.symbols
             */
            const symbols: SymbolMap;

            /**
             * Default symbol map
             *
             * @see https://mochajs.org/api/module-base#.symbols
             */
            interface SymbolMap {
                ok: string;
                err: string;
                dot: string;
                comma: string;
                bang: string;
                [key: string]: string;
            }

            /**
             * Color `str` with the given `type` (from `colors`)
             *
             * @see https://mochajs.org/api/module-base#.color
             */
            function color(type: string, str: string): string;

            /**
             * Expose terminal window size
             *
             * @see https://mochajs.org/api/module-base#.window
             */
            const window: {
                width: number;
            };

            /**
             * ANSI TTY control sequences common among reporters.
             *
             * @see https://mochajs.org/api/module-base#.cursor
             */
            namespace cursor {
                /**
                 * Hides the cursor
                 */
                function hide(): void;

                /**
                 * Shows the cursor
                 */
                function show(): void;

                /**
                 * Deletes the current line
                 */
                function deleteLine(): void;

                /**
                 * Moves to the beginning of the line
                 */
                function beginningOfLine(): void;

                /**
                 * Clears the line and moves to the beginning of the line.
                 */
                function CR(): void;
            }

            /**
             * Returns a diff between two strings with colored ANSI output.
             *
             * @see https://mochajs.org/api/module-base#.generateDiff
             */
            function generateDiff(actual: string, expected: string): string;

            /**
             * Output the given `failures` as a list.
             *
             * @see https://mochajs.org/api/Mocha.reporters.Base.html#.exports.list1
             */
            function list(failures: Test[]): void;
        }

        /**
         * Initialize a new `Dot` matrix test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Dot.html
         */
        class Dot extends Base {
        }

        /**
         * Initialize a new `Doc` reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Doc.html
         */
        class Doc extends Base {
        }

        /**
         * Initialize a new `TAP` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.TAP.html
         */
        class TAP extends Base {
        }

        /**
         * Initialize a new `JSON` reporter
         *
         * @see https://mochajs.org/api/Mocha.reporters.JSON.html
         */
        class JSON extends Base {
        }

        /**
         * Initialize a new `HTML` reporter.
         *
         * - _This reporter cannot be used on the console._
         *
         * @see https://mochajs.org/api/Mocha.reporters.HTML.html
         */
        class HTML extends Base {
            /**
             * Provide suite URL.
             *
             * @see https://mochajs.org/api/Mocha.reporters.HTML.html#suiteURL
             */
            suiteURL(suite: Suite): string;

            /**
             * Provide test URL.
             *
             * @see https://mochajs.org/api/Mocha.reporters.HTML.html#testURL
             */
            testURL(test: Test): string;

            /**
             * Adds code toggle functionality for the provided test's list element.
             *
             * @see https://mochajs.org/api/Mocha.reporters.HTML.html#addCodeToggle
             */
            addCodeToggle(el: HTMLLIElement, contents: string): void;
        }

        /**
         * Initialize a new `List` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.List.html
         */
        class List extends Base {
        }

        /**
         * Initialize a new `Min` minimal test reporter (best used with --watch).
         *
         * @see https://mochajs.org/api/Mocha.reporters.Min.html
         */
        class Min extends Base {
        }

        /**
         * Initialize a new `Spec` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Spec.html
         */
        class Spec extends Base {
        }

        /**
         * Initialize a new `NyanCat` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Nyan.html
         */
        class Nyan extends Base {
            private colorIndex;
            private numberOfLines;
            private rainbowColors;
            private scoreboardWidth;
            private tick;
            private trajectories;
            private trajectoryWidthMax;
            private draw;
            private drawScoreboard;
            private appendRainbow;
            private drawRainbow;
            private drawNyanCat;
            private face;
            private cursorUp;
            private cursorDown;
            private generateColors;
            private rainbowify;
        }

        /**
         * Initialize a new `XUnit` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.XUnit.html
         */
        class XUnit extends Base {
            constructor(runner: Runner, options?: XUnit.MochaOptions);
            /** @deprecated Use the overload that accepts `Mocha.Runner` instead. */
            constructor(runner: IRunner, options?: XUnit.MochaOptions);

            /**
             * Override done to close the stream (if it's a file).
             *
             * @see https://mochajs.org/api/Mocha.reporters.XUnit.html#done
             */
            done(failures: number, fn: (failures: number) => void): void;

            /**
             * Write out the given line.
             *
             * @see https://mochajs.org/api/Mocha.reporters.XUnit.html#write
             */
            write(line: string): void;

            /**
             * Output tag for the given `test.`
             *
             * @see https://mochajs.org/api/Mocha.reporters.XUnit.html#test
             */
            test(test: Test): void;
        }

        namespace XUnit {
            interface MochaOptions extends Mocha.MochaOptions {
                reporterOptions?: ReporterOptions;
            }

            interface ReporterOptions {
                output?: string;
                suiteName?: string;
            }
        }

        /**
         * Initialize a new `Markdown` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Markdown.html
         */
        class Markdown extends Base {
        }

        /**
         * Initialize a new `Progress` bar test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Progress.html
         */
        class Progress extends Base {
            constructor(runner: Runner, options?: Progress.MochaOptions);
            /** @deprecated Use the overload that accepts `Mocha.Runner` instead. */
            constructor(runner: IRunner, options?: Progress.MochaOptions);
        }

        namespace Progress {
            interface MochaOptions extends Mocha.MochaOptions {
                reporterOptions?: ReporterOptions;
            }

            interface ReporterOptions {
                open?: string;
                complete?: string;
                incomplete?: string;
                close?: string;
                verbose?: boolean;
            }
        }

        /**
         * Initialize a new `Landing` reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.Landing.html
         */
        class Landing extends Base {
        }

        /**
         * Initialize a new `JSONStream` test reporter.
         *
         * @see https://mochajs.org/api/Mocha.reporters.JSONStream.html
         */
        class JSONStream extends Base {
        }

        // value-only aliases
        const base: typeof Base;
        const dot: typeof Dot;
        const doc: typeof Doc;
        const tap: typeof TAP;
        const json: typeof JSON;
        const html: typeof HTML;
        const list: typeof List;
        const spec: typeof Spec;
        const nyan: typeof Nyan;
        const xunit: typeof XUnit;
        const markdown: typeof Markdown;
        const progress: typeof Progress;
        const landing: typeof Landing;
        // NOTE: not possible to type this correctly:
        // const "json-stream": typeof JSONStream;
    }

    /**
     * Initialize a new `Runnable` with the given `title` and callback `fn`.
     *
     * @see https://mochajs.org/api/Runnable.html
     */
    class Runnable {
        private _slow;
        private _enableTimeouts;
        private _retries;
        private _currentRetry;
        private _timeout;
        private _timeoutError;

        constructor(title: string, fn?: Func | AsyncFunc);

        title: string;
        fn: Func | AsyncFunc | undefined;
        body: string;
        async: boolean;
        sync: boolean;
        timedOut: boolean;
        pending: boolean;
        duration?: number;
        parent?: Suite;
        state?: "failed" | "passed";
        timer?: any;
        ctx?: Context;
        callback?: Done;
        allowUncaught?: boolean;
        file?: string;

        /**
         * Get test timeout.
         *
         * @see https://mochajs.org/api/Runnable.html#timeout
         */
        timeout(): number;

        /**
         * Set test timeout.
         *
         * @see https://mochajs.org/api/Runnable.html#timeout
         */
        timeout(ms: string | number): this;

        /**
         * Get test slowness threshold.
         *
         * @see https://mochajs.org/api/Runnable.html#slow
         */
        slow(): number;

        /**
         * Set test slowness threshold.
         *
         * @see https://mochajs.org/api/Runnable.html#slow
         */
        slow(ms: string | number): this;

        /**
         * Get whether timeouts are enabled.
         *
         * @see https://mochajs.org/api/Runnable.html#enableTimeouts
         */
        enableTimeouts(): boolean;

        /**
         * Set whether timeouts are enabled.
         *
         * @see https://mochajs.org/api/Runnable.html#enableTimeouts
         */
        enableTimeouts(enabled: boolean): this;

        /**
         * Halt and mark as pending.
         */
        skip(): never;

        /**
         * Check if this runnable or its parent suite is marked as pending.
         *
         * @see https://mochajs.org/api/Runnable.html#isPending
         */
        isPending(): boolean;

        /**
         * Return `true` if this Runnable has failed.
         */
        isFailed(): boolean;

        /**
         * Return `true` if this Runnable has passed.
         */
        isPassed(): boolean;

        /**
         * Set or get number of retries.
         *
         * @see https://mochajs.org/api/Runnable.html#retries
         */
        retries(): number;

        /**
         * Set or get number of retries.
         *
         * @see https://mochajs.org/api/Runnable.html#retries
         */
        retries(n: number): void;

        /**
         * Set or get current retry
         *
         * @see https://mochajs.org/api/Runnable.html#currentRetry
         */
        protected currentRetry(): number;

        /**
         * Set or get current retry
         *
         * @see https://mochajs.org/api/Runnable.html#currentRetry
         */
        protected currentRetry(n: number): void;

        /**
         * Return the full title generated by recursively concatenating the parent's full title.
         */
        fullTitle(): string;

        /**
         * Return the title path generated by concatenating the parent's title path with the title.
         */
        titlePath(): string[];

        /**
         * Clear the timeout.
         *
         * @see https://mochajs.org/api/Runnable.html#clearTimeout
         */
        clearTimeout(): void;

        /**
         * Inspect the runnable void of private properties.
         *
         * @see https://mochajs.org/api/Runnable.html#inspect
         */
        inspect(): string;

        /**
         * Reset the timeout.
         *
         * @see https://mochajs.org/api/Runnable.html#resetTimeout
         */
        resetTimeout(): void;

        /**
         * Get a list of whitelisted globals for this test run.
         *
         * @see https://mochajs.org/api/Runnable.html#globals
         */
        globals(): string[];

        /**
         * Set a list of whitelisted globals for this test run.
         *
         * @see https://mochajs.org/api/Runnable.html#globals
         */
        globals(globals: ReadonlyArray<string>): void;

        /**
         * Run the test and invoke `fn(err)`.
         *
         * @see https://mochajs.org/api/Runnable.html#run
         */
        run(fn: Done): void;
    }

    // #region Runnable "error" event
    interface Runnable extends NodeJS.EventEmitter {
        on(event: "error", listener: (error: any) => void): this;
        once(event: "error", listener: (error: any) => void): this;
        addListener(event: "error", listener: (error: any) => void): this;
        removeListener(event: "error", listener: (error: any) => void): this;
        prependListener(event: "error", listener: (error: any) => void): this;
        prependOnceListener(event: "error", listener: (error: any) => void): this;
        emit(name: "error", error: any): boolean;
    }
    // #endregion Runnable "error" event
    // #region Runnable untyped events
    interface Runnable extends NodeJS.EventEmitter {
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        emit(name: string, ...args: any[]): boolean;
    }
    // #endregion Runnable untyped events

    /**
     * Test context
     *
     * @see https://mochajs.org/api/module-Context.html#~Context
     */
    class Context {
        private _runnable;

        test?: Runnable;
        currentTest?: Test;

        /**
         * Get the context `Runnable`.
         */
        runnable(): Runnable;

        /**
         * Set the context `Runnable`.
         */
        runnable(runnable: Runnable): this;
        /** @deprecated Use the overload that accepts `Mocha.Runnable` instead. */
        runnable(runnable: IRunnable): this;

        /**
         * Get test timeout.
         */
        timeout(): number;

        /**
         * Set test timeout.
         */
        timeout(ms: string | number): this;

        /**
         * Get whether timeouts are enabled.
         */
        enableTimeouts(): boolean;

        /**
         * Set whether timeouts are enabled.
         */
        enableTimeouts(enabled: boolean): this;

        /**
         * Get test slowness threshold.
         */
        slow(): number;

        /**
         * Set test slowness threshold.
         */
        slow(ms: string | number): this;

        /**
         * Mark a test as skipped.
         */
        skip(): never;

        /**
         * Get the number of allowed retries on failed tests.
         */
        retries(): number;

        /**
         * Set the number of allowed retries on failed tests.
         */
        retries(n: number): this;

        [key: string]: any;
    }

    /**
     * Initialize a `Runner` for the given `suite`.
     *
     * @see https://mochajs.org/api/Mocha.Runner.html
     */
    class Runner {
        private _globals;
        private _abort;
        private _delay;
        private _defaultGrep;
        private next;
        private hookErr;
        private prevGlobalsLength;
        private nextSuite;

        constructor(suite: Suite, delay: boolean);

        /** @deprecated Use the overload that accepts `Mocha.Suite` instead. */
        constructor(suite: ISuite, delay: boolean);

        suite: Suite;
        started: boolean;
        total: number;
        failures: number;
        asyncOnly?: boolean;
        allowUncaught?: boolean;
        fullStackTrace?: boolean;
        forbidOnly?: boolean;
        forbidPending?: boolean;
        ignoreLeaks?: boolean;
        test?: Test;
        currentRunnable?: Runnable;
        stats?: Stats; // added by reporters

        /**
         * Run tests with full titles matching `re`. Updates runner.total
         * with number of tests matched.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#.Runner#grep
         */
        grep(re: RegExp, invert: boolean): this;

        /**
         * Returns the number of tests matching the grep search for the
         * given suite.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#.Runner#grepTotal
         */
        grepTotal(suite: Suite): number;

        /** @deprecated Use the overload that accepts `Mocha.Suite` instead. */
        grepTotal(suite: ISuite): number;

        /**
         * Gets the allowed globals.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#.Runner#globals
         */
        globals(): string[];

        /**
         * Allow the given `arr` of globals.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#.Runner#globals
         */
        globals(arr: ReadonlyArray<string>): this;

        /**
         * Run the root suite and invoke `fn(failures)` on completion.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#.Runner#run
         */
        run(fn?: (failures: number) => void): this;

        /**
         * Cleanly abort execution.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#.Runner#abort
         */
        abort(): this;

        /**
         * Handle uncaught exceptions.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#uncaught
         */
        uncaught(err: any): void;

        /**
         * Wrapper for setImmediate, process.nextTick, or browser polyfill.
         */
        protected static immediately(callback: Function): void;

        /**
         * Return a list of global properties.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#globalProps
         */
        protected globalProps(): string[];

        /**
         * Check for global variable leaks.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#checkGlobals
         */
        protected checkGlobals(test: Test): void;

        /**
         * Fail the given `test`.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#fail
         */
        protected fail(test: Test, err: any): void;

        /**
         * Fail the given `hook` with `err`.
         *
         * Hook failures work in the following pattern:
         * - If bail, then exit
         * - Failed `before` hook skips all tests in a suite and subsuites,
         *   but jumps to corresponding `after` hook
         * - Failed `before each` hook skips remaining tests in a
         *   suite and jumps to corresponding `after each` hook,
         *   which is run only once
         * - Failed `after` hook does not alter
         *   execution order
         * - Failed `after each` hook skips remaining tests in a
         *   suite and subsuites, but executes other `after each`
         *   hooks
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#failHook
         */
        protected failHook(hook: Hook, err: any): void;

        /**
         * Run hook `name` callbacks and then invoke `fn()`.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#hook
         */
        protected hook(name: string, fn: () => void): void;

        /**
         * Run hook `name` for the given array of `suites`
         * in order, and callback `fn(err, errSuite)`.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#hooks
         */
        protected hooks(name: string, suites: Suite[], fn: (err?: any, errSuite?: Suite) => void): void;

        /**
         * Run hooks from the top level down.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#hookUp
         */
        protected hookUp(name: string, fn: (err?: any, errSuite?: Suite) => void): void;

        /**
         * Run hooks from the bottom up.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#hookDown
         */
        protected hookDown(name: string, fn: (err?: any, errSuite?: Suite) => void): void;

        /**
         * Return an array of parent Suites from closest to furthest.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#parents
         */
        protected parents(): Suite[];

        /**
         * Run the current test and callback `fn(err)`.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#runTest
         */
        protected runTest(fn: Done): any;

        /**
         * Run tests in the given `suite` and invoke the callback `fn()` when complete.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#runTests
         */
        protected runTests(suite: Suite, fn: (errSuite?: Suite) => void): void;

        /**
         * Run the given `suite` and invoke the callback `fn()` when complete.
         *
         * @see https://mochajs.org/api/Mocha.Runner.html#runSuite
         */
        protected runSuite(suite: Suite, fn: (errSuite?: Suite) => void): void;
    }

    // #region Runner "waiting" event
    interface Runner {
        on(event: "waiting", listener: (rootSuite: Suite) => void): this;
        once(event: "waiting", listener: (rootSuite: Suite) => void): this;
        addListener(event: "waiting", listener: (rootSuite: Suite) => void): this;
        removeListener(event: "waiting", listener: (rootSuite: Suite) => void): this;
        prependListener(event: "waiting", listener: (rootSuite: Suite) => void): this;
        prependOnceListener(event: "waiting", listener: (rootSuite: Suite) => void): this;
        emit(name: "waiting", rootSuite: Suite): boolean;
    }
    // #endregion Runner "waiting" event
    // #region Runner "start" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "start", listener: () => void): this;
        once(event: "start", listener: () => void): this;
        addListener(event: "start", listener: () => void): this;
        removeListener(event: "start", listener: () => void): this;
        prependListener(event: "start", listener: () => void): this;
        prependOnceListener(event: "start", listener: () => void): this;
        emit(name: "start"): boolean;
    }
    // #endregion Runner "start" event
    // #region Runner "end" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "end", listener: () => void): this;
        once(event: "end", listener: () => void): this;
        addListener(event: "end", listener: () => void): this;
        removeListener(event: "end", listener: () => void): this;
        prependListener(event: "end", listener: () => void): this;
        prependOnceListener(event: "end", listener: () => void): this;
        emit(name: "end"): boolean;
    }
    // #endregion Runner "end" event
    // #region Runner "suite" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "suite", listener: (suite: Suite) => void): this;
        once(event: "suite", listener: (suite: Suite) => void): this;
        addListener(event: "suite", listener: (suite: Suite) => void): this;
        removeListener(event: "suite", listener: (suite: Suite) => void): this;
        prependListener(event: "suite", listener: (suite: Suite) => void): this;
        prependOnceListener(event: "suite", listener: (suite: Suite) => void): this;
        emit(name: "suite", suite: Suite): boolean;
    }
    // #endregion Runner "suite" event
    // #region Runner "suite end" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "suite end", listener: (suite: Suite) => void): this;
        once(event: "suite end", listener: (suite: Suite) => void): this;
        addListener(event: "suite end", listener: (suite: Suite) => void): this;
        removeListener(event: "suite end", listener: (suite: Suite) => void): this;
        prependListener(event: "suite end", listener: (suite: Suite) => void): this;
        prependOnceListener(event: "suite end", listener: (suite: Suite) => void): this;
        emit(name: "suite end", suite: Suite): boolean;
    }
    // #endregion Runner "suite end" event
    // #region Runner "test" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "test", listener: (test: Test) => void): this;
        once(event: "test", listener: (test: Test) => void): this;
        addListener(event: "test", listener: (test: Test) => void): this;
        removeListener(event: "test", listener: (test: Test) => void): this;
        prependListener(event: "test", listener: (test: Test) => void): this;
        prependOnceListener(event: "test", listener: (test: Test) => void): this;
        emit(name: "test", test: Test): boolean;
    }
    // #endregion Runner "test" event
    // #region Runner "test end" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "test end", listener: (test: Test) => void): this;
        once(event: "test end", listener: (test: Test) => void): this;
        addListener(event: "test end", listener: (test: Test) => void): this;
        removeListener(event: "test end", listener: (test: Test) => void): this;
        prependListener(event: "test end", listener: (test: Test) => void): this;
        prependOnceListener(event: "test end", listener: (test: Test) => void): this;
        emit(name: "test end", test: Test): boolean;
    }
    // #endregion Runner "test end" event
    // #region Runner "hook" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "hook", listener: (hook: Hook) => void): this;
        once(event: "hook", listener: (hook: Hook) => void): this;
        addListener(event: "hook", listener: (hook: Hook) => void): this;
        removeListener(event: "hook", listener: (hook: Hook) => void): this;
        prependListener(event: "hook", listener: (hook: Hook) => void): this;
        prependOnceListener(event: "hook", listener: (hook: Hook) => void): this;
        emit(name: "hook", hook: Hook): boolean;
    }
    // #endregion Runner "hook" event
    // #region Runner "hook end" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "hook end", listener: (hook: Hook) => void): this;
        once(event: "hook end", listener: (hook: Hook) => void): this;
        addListener(event: "hook end", listener: (hook: Hook) => void): this;
        removeListener(event: "hook end", listener: (hook: Hook) => void): this;
        prependListener(event: "hook end", listener: (hook: Hook) => void): this;
        prependOnceListener(event: "hook end", listener: (hook: Hook) => void): this;
        emit(name: "hook end", hook: Hook): boolean;
    }
    // #endregion Runner "hook end" event
    // #region Runner "pass" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "pass", listener: (test: Test) => void): this;
        once(event: "pass", listener: (test: Test) => void): this;
        addListener(event: "pass", listener: (test: Test) => void): this;
        removeListener(event: "pass", listener: (test: Test) => void): this;
        prependListener(event: "pass", listener: (test: Test) => void): this;
        prependOnceListener(event: "pass", listener: (test: Test) => void): this;
        emit(name: "pass", test: Test): boolean;
    }
    // #endregion Runner "pass" event
    // #region Runner "fail" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "fail", listener: (test: Test, err: any) => void): this;
        once(event: "fail", listener: (test: Test, err: any) => void): this;
        addListener(event: "fail", listener: (test: Test, err: any) => void): this;
        removeListener(event: "fail", listener: (test: Test, err: any) => void): this;
        prependListener(event: "fail", listener: (test: Test, err: any) => void): this;
        prependOnceListener(event: "fail", listener: (test: Test, err: any) => void): this;
        emit(name: "fail", test: Test, err: any): boolean;
    }
    // #endregion Runner "fail" event
    // #region Runner "pending" event
    interface Runner extends NodeJS.EventEmitter {
        on(event: "pending", listener: (test: Test) => void): this;
        once(event: "pending", listener: (test: Test) => void): this;
        addListener(event: "pending", listener: (test: Test) => void): this;
        removeListener(event: "pending", listener: (test: Test) => void): this;
        prependListener(event: "pending", listener: (test: Test) => void): this;
        prependOnceListener(event: "pending", listener: (test: Test) => void): this;
        emit(name: "pending", test: Test): boolean;
    }
    // #endregion Runner "pending" event
    // #region Runner untyped events
    interface Runner extends NodeJS.EventEmitter {
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        emit(name: string, ...args: any[]): boolean;
    }
    // #endregion Runner untyped events

    /**
     * Initialize a new `Suite` with the given `title` and `ctx`.
     *
     * @see https://mochajs.org/api/Mocha.Suite.html
     */
    class Suite {
        private _beforeEach;
        private _beforeAll;
        private _afterEach;
        private _afterAll;
        private _timeout;
        private _enableTimeouts;
        private _slow;
        private _bail;
        private _retries;
        private _onlyTests;
        private _onlySuites;

        constructor(title: string, parentContext?: Context);
        /** @deprecated Use the overload that accepts `Mocha.Context` instead. */
        constructor(title: string, parentContext?: IContext);

        ctx: Context;
        suites: Suite[];
        tests: Test[];
        pending: boolean;
        file?: string;
        root: boolean;
        delayed: boolean;
        parent: Suite | undefined;
        title: string;

        /**
         * Create a new `Suite` with the given `title` and parent `Suite`. When a suite
         * with the same title is already present, that suite is returned to provide
         * nicer reporter and more flexible meta-testing.
         *
         * @see https://mochajs.org/api/mocha#.exports.create
         */
        static create(parent: Suite, title: string): Suite;
        /** @deprecated Use the overload that accepts `Mocha.Suite` instead. */
        static create(parent: ISuite, title: string): Suite;

        /**
         * Return a clone of this `Suite`.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#clone
         */
        clone(): Suite;

        /**
         * Get timeout `ms`.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#timeout
         */
        timeout(): number;

        /**
         * Set timeout `ms` or short-hand such as "2s".
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#timeout
         */
        timeout(ms: string | number): this;

        /**
         * Get number of times to retry a failed test.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#retries
         */
        retries(): number;

        /**
         * Set number of times to retry a failed test.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#retries
         */
        retries(n: string | number): this;

        /**
         * Get whether timeouts are enabled.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#enableTimeouts
         */
        enableTimeouts(): boolean;

        /**
         * Set whether timeouts are `enabled`.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#enableTimeouts
         */
        enableTimeouts(enabled: boolean): this;

        /**
         * Get slow `ms`.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#slow
         */
        slow(): number;

        /**
         * Set slow `ms` or short-hand such as "2s".
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#slow
         */
        slow(ms: string | number): this;

        /**
         * Get whether to bail after first error.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#bail
         */
        bail(): boolean;

        /**
         * Set whether to bail after first error.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#bail
         */
        bail(bail: boolean): this;

        /**
         * Check if this suite or its parent suite is marked as pending.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#isPending
         */
        isPending(): boolean;

        /**
         * Run `fn(test[, done])` before running tests.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#beforeAll
         */
        beforeAll(fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` before running tests.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#beforeAll
         */
        beforeAll(title: string, fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` after running tests.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#afterAll
         */
        afterAll(fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` after running tests.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#afterAll
         */
        afterAll(title: string, fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` before each test case.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#beforeEach
         */
        beforeEach(fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` before each test case.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#beforeEach
         */
        beforeEach(title: string, fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` after each test case.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#afterEach
         */
        afterEach(fn?: Func | AsyncFunc): this;

        /**
         * Run `fn(test[, done])` after each test case.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#afterEach
         */
        afterEach(title: string, fn?: Func | AsyncFunc): this;

        /**
         * Add a test `suite`.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#addSuite
         */
        addSuite(suite: Suite): this;
        /** @deprecated Use the overload that accepts `Mocha.ISuite` instead. */
        addSuite(suite: ISuite): this;

        /**
         * Add a `test` to this suite.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#addTest
         */
        addTest(test: Test): this;
        /** @deprecated Use the overload that accepts `Mocha.ITest` instead. */
        addTest(test: ITest): this;

        /**
         * Return the full title generated by recursively concatenating the parent's
         * full title.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#.Suite#fullTitle
         */
        fullTitle(): string;

        /**
         * Return the title path generated by recursively concatenating the parent's
         * title path.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#.Suite#titlePath
         */
        titlePath(): string[];

        /**
         * Return the total number of tests.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#.Suite#total
         */
        total(): number;

        /**
         * Iterates through each suite recursively to find all tests. Applies a
         * function in the format `fn(test)`.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#eachTest
         */
        eachTest(fn: (test: Test) => void): this;

        /**
         * This will run the root suite if we happen to be running in delayed mode.
         *
         * @see https://mochajs.org/api/Mocha.Suite.html#run
         */
        run(): void;

        /**
         * Generic hook-creator.
         */
        protected _createHook(title: string, fn?: Func | AsyncFunc): Hook;
    }

    // #region Suite "beforeAll" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "beforeAll", listener: (hook: Hook) => void): this;
        once(event: "beforeAll", listener: (hook: Hook) => void): this;
        addListener(event: "beforeAll", listener: (hook: Hook) => void): this;
        removeListener(event: "beforeAll", listener: (hook: Hook) => void): this;
        prependListener(event: "beforeAll", listener: (hook: Hook) => void): this;
        prependOnceListener(event: "beforeAll", listener: (hook: Hook) => void): this;
        emit(name: "beforeAll", hook: Hook): boolean;
    }
    // #endregion Suite "beforeAll" event
    // #region Suite "afterAll" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "afterAll", listener: (hook: Hook) => void): this;
        once(event: "afterAll", listener: (hook: Hook) => void): this;
        addListener(event: "afterAll", listener: (hook: Hook) => void): this;
        removeListener(event: "afterAll", listener: (hook: Hook) => void): this;
        prependListener(event: "afterAll", listener: (hook: Hook) => void): this;
        prependOnceListener(event: "afterAll", listener: (hook: Hook) => void): this;
        emit(name: "afterAll", hook: Hook): boolean;
    }
    // #endregion Suite "afterAll" event
    // #region Suite "beforeEach" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "beforeEach", listener: (hook: Hook) => void): this;
        once(event: "beforeEach", listener: (hook: Hook) => void): this;
        addListener(event: "beforeEach", listener: (hook: Hook) => void): this;
        removeListener(event: "beforeEach", listener: (hook: Hook) => void): this;
        prependListener(event: "beforeEach", listener: (hook: Hook) => void): this;
        prependOnceListener(event: "beforeEach", listener: (hook: Hook) => void): this;
        emit(name: "beforeEach", hook: Hook): boolean;
    }
    // #endregion Suite "beforeEach" event
    // #region Suite "afterEach" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "afterEach", listener: (hook: Hook) => void): this;
        once(event: "afterEach", listener: (hook: Hook) => void): this;
        addListener(event: "afterEach", listener: (hook: Hook) => void): this;
        removeListener(event: "afterEach", listener: (hook: Hook) => void): this;
        prependListener(event: "afterEach", listener: (hook: Hook) => void): this;
        prependOnceListener(event: "afterEach", listener: (hook: Hook) => void): this;
        emit(name: "afterEach", hook: Hook): boolean;
    }
    // #endregion Suite "afterEach" event
    // #region Suite "suite" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "suite", listener: (suite: Suite) => void): this;
        once(event: "suite", listener: (suite: Suite) => void): this;
        addListener(event: "suite", listener: (suite: Suite) => void): this;
        removeListener(event: "suite", listener: (suite: Suite) => void): this;
        prependListener(event: "suite", listener: (suite: Suite) => void): this;
        prependOnceListener(event: "suite", listener: (suite: Suite) => void): this;
        emit(name: "suite", suite: Suite): boolean;
    }
    // #endregion Suite "suite" event
    // #region Suite "test" event
    interface Suite {
        on(event: "test", listener: (test: Test) => void): this;
        once(event: "test", listener: (test: Test) => void): this;
        addListener(event: "test", listener: (test: Test) => void): this;
        removeListener(event: "test", listener: (test: Test) => void): this;
        prependListener(event: "test", listener: (test: Test) => void): this;
        prependOnceListener(event: "test", listener: (test: Test) => void): this;
        emit(name: "test", test: Test): boolean;
    }
    // #endregion Suite "test" event
    // #region Suite "run" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "run", listener: () => void): this;
        once(event: "run", listener: () => void): this;
        addListener(event: "run", listener: () => void): this;
        removeListener(event: "run", listener: () => void): this;
        prependListener(event: "run", listener: () => void): this;
        prependOnceListener(event: "run", listener: () => void): this;
        emit(name: "run"): boolean;
    }
    // #endregion Suite "run" event
    // #region Suite "pre-require" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "pre-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        once(event: "pre-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        addListener(event: "pre-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        removeListener(event: "pre-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        prependListener(event: "pre-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        prependOnceListener(event: "pre-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        emit(name: "pre-require", context: MochaGlobals, file: string, mocha: Mocha): boolean;
    }
    // #endregion Suite "pre-require" event
    // #region Suite "require" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "require", listener: (module: any, file: string, mocha: Mocha) => void): this;
        once(event: "require", listener: (module: any, file: string, mocha: Mocha) => void): this;
        addListener(event: "require", listener: (module: any, file: string, mocha: Mocha) => void): this;
        removeListener(event: "require", listener: (module: any, file: string, mocha: Mocha) => void): this;
        prependListener(event: "require", listener: (module: any, file: string, mocha: Mocha) => void): this;
        prependOnceListener(event: "require", listener: (module: any, file: string, mocha: Mocha) => void): this;
        emit(name: "require", module: any, file: string, mocha: Mocha): boolean;
    }
    // #endregion Suite "require" event
    // #region Suite "post-require" event
    interface Suite extends NodeJS.EventEmitter {
        on(event: "post-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        once(event: "post-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        addListener(event: "post-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        removeListener(event: "post-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        prependListener(event: "post-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        prependOnceListener(event: "post-require", listener: (context: MochaGlobals, file: string, mocha: Mocha) => void): this;
        emit(name: "post-require", context: MochaGlobals, file: string, mocha: Mocha): boolean;
    }
    // #endregion Suite "post-require" event
    // #region Suite untyped events
    interface Suite extends NodeJS.EventEmitter {
        on(event: string, listener: (...args: any[]) => void): this;
        once(event: string, listener: (...args: any[]) => void): this;
        addListener(event: string, listener: (...args: any[]) => void): this;
        removeListener(event: string, listener: (...args: any[]) => void): this;
        prependListener(event: string, listener: (...args: any[]) => void): this;
        prependOnceListener(event: string, listener: (...args: any[]) => void): this;
        emit(name: string, ...args: any[]): boolean;
    }
    // #endregion Runner untyped events

    /**
     * Initialize a new `Hook` with the given `title` and callback `fn`
     *
     * @see https://mochajs.org/api/Hook.html
     */
    class Hook extends Runnable {
        private _error;

        type: "hook";
        originalTitle?: string; // added by Runner

        /**
         * Get the test `err`.
         *
         * @see https://mochajs.org/api/Hook.html#error
         */
        error(): any;

        /**
         * Set the test `err`.
         *
         * @see https://mochajs.org/api/Hook.html#error
         */
        error(err: any): void;
    }

    /**
     * Initialize a new `Test` with the given `title` and callback `fn`.
     *
     * @see https://mochajs.org/api/Test.html
     */
    class Test extends Runnable {
        type: "test";
        speed?: "slow" | "medium" | "fast"; // added by reporters
        err?: Error; // added by reporters
        clone(): Test;
    }

    /**
     * Test statistics
     */
    interface Stats {
        suites: number;
        tests: number;
        passes: number;
        pending: number;
        failures: number;
        start?: Date;
        end?: Date;
        duration?: number;
    }

    type TestInterface = (suite: Suite) => void;

    interface ReporterConstructor {
        new (runner: Runner, options: { reporterOptions?: any; }): reporters.Base;
    }

    type Done = (err?: any) => void;

    /**
     * Callback function used for tests and hooks.
     */
    type Func = (this: Context, done: Done) => void;

    /**
     * Async callback function used for tests and hooks.
     */
    type AsyncFunc = (this: Context) => PromiseLike<any>;

    /**
     * Options to pass to Mocha.
     */
    interface MochaOptions {
        /** Test interfaces ("bdd", "tdd", "exports", etc.). */
        ui?: Interface;

        /**
         * Reporter constructor, built-in reporter name, or reporter module path. Defaults to
         * `"spec"`.
         */
        reporter?: string | ReporterConstructor;

        /** Options to pass to the reporter. */
        reporterOptions?: any;

        /** Array of accepted globals. */
        globals?: string[];

        /** timeout in milliseconds. */
        timeout?: number;

        enableTimeouts?: boolean;

        /** number of times to retry failed tests. */
        retries?: number;

        /** bail on the first test failure. */
        bail?: boolean;

        /** milliseconds to wait before considering a test slow. */
        slow?: number;

        /** ignore global leaks. */
        ignoreLeaks?: boolean;

        /** display the full stack trace on failure. */
        fullStackTrace?: boolean;

        /** string or regexp to filter tests with. */
        grep?: string | RegExp;

        /** Enable growl support. */
        growl?: boolean;

        /** Emit color output. */
        useColors?: boolean;

        /** Use inline diffs rather than +/-. */
        inlineDiffs?: boolean;

        /** Do not show diffs at all. */
        hideDiff?: boolean;

        asyncOnly?: boolean;
        delay?: boolean;
        forbidOnly?: boolean;
        forbidPending?: boolean;
        noHighlighting?: boolean;
        allowUncaught?: boolean;
    }

    interface MochaInstanceOptions extends MochaOptions {
        files?: string[];
    }

    /**
     * Variables added to the global scope by Mocha when run in the CLI.
     */
    interface MochaGlobals {
        /**
         * Execute before running tests.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#before
         */
        before: HookFunction;

        /**
         * Execute after running tests.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#after
         */
        after: HookFunction;

        /**
         * Execute before each test case.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#beforeEach
         */
        beforeEach: HookFunction;

        /**
         * Execute after each test case.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#afterEach
         */
        afterEach: HookFunction;

        /**
         * Describe a "suite" containing nested suites and tests.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        describe: SuiteFunction;

        /**
         * Describe a "suite" containing nested suites and tests.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        context: SuiteFunction;

        /**
         * Pending suite.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        xdescribe: PendingSuiteFunction;

        /**
         * Pending suite.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        xcontext: PendingSuiteFunction;

        /**
         * Describes a test case.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        it: TestFunction;

        /**
         * Describes a test case.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        specify: TestFunction;

        /**
         * Describes a pending test case.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        xit: PendingTestFunction;

        /**
         * Describes a pending test case.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        xspecify: PendingTestFunction;

        /**
         * Execute before running tests.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#before
         */
        suiteSetup: HookFunction;

        /**
         * Execute after running tests.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#after
         */
        suiteTeardown: HookFunction;

        /**
         * Execute before each test case.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#beforeEach
         */
        setup: HookFunction;

        /**
         * Execute after each test case.
         *
         * - _Only available when invoked via the mocha CLI._
         *
         * @see https://mochajs.org/api/global.html#afterEach
         */
        teardown: HookFunction;

        /**
         * Describe a "suite" containing nested suites and tests.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        suite: SuiteFunction;

        /**
         * Describes a test case.
         *
         * - _Only available when invoked via the mocha CLI._
         */
        test: TestFunction;

        run: typeof run;
    }

    /**
     * Third-party declarations that want to add new entries to the `Reporter` union can
     * contribute names here.
     */
    interface ReporterContributions {
        Base: never;
        base: never;
        Dot: never;
        dot: never;
        TAP: never;
        tap: never;
        JSON: never;
        json: never;
        HTML: never;
        html: never;
        List: never;
        list: never;
        Min: never;
        min: never;
        Spec: never;
        spec: never;
        Nyan: never;
        nyan: never;
        XUnit: never;
        xunit: never;
        Markdown: never;
        markdown: never;
        Progress: never;
        progress: never;
        Landing: never;
        landing: never;
        JSONStream: never;
        "json-stream": never;
    }

    type Reporter = keyof ReporterContributions;

    /**
     * Third-party declarations that want to add new entries to the `Interface` union can
     * contribute names here.
     */
    interface InterfaceContributions {
        bdd: never;
        tdd: never;
        qunit: never;
        exports: never;
    }

    type Interface = keyof InterfaceContributions;

    // #region Deprecations

    /** @deprecated use `Mocha.Context` instead. */
    interface IContext {
        test?: IRunnable;
        runnable(): IRunnable | undefined;
        /** @deprecated `.runnable()` returns `this` in `Mocha.Context`. */
        runnable(runnable: IRunnable): IContext;
        timeout(): number;
        /** @deprecated `.timeout()` returns `this` in `Mocha.Context`. */
        timeout(timeout: number): IContext;
        /** @deprecated `.enableTimeouts()` has additional overloads in `Mocha.Context`. */
        /** @deprecated `.enableTimeouts()` returns `this` in `Mocha.Context`. */
        enableTimeouts(enableTimeouts: boolean): IContext;
        /** @deprecated `.slow()` has additional overloads in `Mocha.Context`. */
        /** @deprecated `.slow()` returns `this` in `Mocha.Context`. */
        slow(slow: number): IContext;
        /** @deprecated `.skip()` returns `never` in `Mocha.Context`. */
        skip(): IContext;
        retries(): number;
        /** @deprecated `.retries()` returns `this` in `Mocha.Context`. */
        retries(retries: number): IContext;
    }

    /** @deprecated use `Mocha.Suite` instead. */
    interface ISuiteCallbackContext {
        /** @deprecated `.timeout()` has additional overloads in `Mocha.Suite`. */
        timeout(ms: number | string): this;
        /** @deprecated `.retries()` has additional overloads in `Mocha.Suite`. */
        retries(n: number): this;
        /** @deprecated `.slow()` has additional overloads in `Mocha.Suite`. */
        slow(ms: number): this;
    }

    /** @deprecated use `Mocha.Context` instead. */
    interface IHookCallbackContext {
        /** @deprecated `.skip()` returns `never` in `Mocha.Context`. */
        skip(): this;
        /** @deprecated `.timeout()` has additional overloads in `Mocha.Context`. */
        timeout(ms: number | string): this;
        [index: string]: any;
    }

    /** @deprecated use `Mocha.Context` instead. */
    interface ITestCallbackContext {
        /** @deprecated `.skip()` returns `never` in `Mocha.Context`. */
        skip(): this;
        /** @deprecated `.timeout()` has additional overloads in `Mocha.Context`. */
        timeout(ms: number | string): this;
        /** @deprecated `.retries()` has additional overloads in `Mocha.Context`. */
        retries(n: number): this;
        /** @deprecated `.slow()` has additional overloads in `Mocha.Context`. */
        slow(ms: number): this;
        [index: string]: any;
    }

    /** Partial interface for Mocha's `Runnable` class. */
    /** @deprecated use `Mocha.Runnable` instead. */
    interface IRunnable extends NodeJS.EventEmitter {
        title: string;
        /** @deprecated `.fn` has type `Func | AsyncFunc` in `Mocha.Runnable`. */
        fn: Function | undefined;
        async: boolean;
        sync: boolean;
        timedOut: boolean;
        /** @deprecated `.timeout()` has additional overloads in `Mocha.Runnable`. */
        timeout(n: number | string): this;
        duration?: number;
    }

    /** Partial interface for Mocha's `Suite` class. */
    /** @deprecated use `Mocha.Suite` instead. */
    interface ISuite {
        /** @deprecated `.ctx` has type `Mocha.Context` in `Mocha.Suite`. */
        ctx: IContext;
        /** @deprecated `.parent` has type `Mocha.Suite | undefined` in `Mocha.Suite`. */
        parent: ISuite | undefined;
        root: boolean;
        title: string;
        /** @deprecated `.suites` has type `Mocha.Suite[]` in `Mocha.Suite`. */
        suites: ISuite[];
        /** @deprecated `.tests` has type `Mocha.Test[]` in `Mocha.Suite`. */
        tests: ITest[];

        bail(): boolean;
        /** @deprecated `.bail()` returns `this` in `Mocha.Suite`. */
        bail(bail: boolean): ISuite;
        fullTitle(): string;
        retries(): number;
        /** @deprecated `.retries()` returns `this` in `Mocha.Suite`. */
        retries(retries: number): ISuite;
        slow(): number;
        /** @deprecated `.slow()` returns `this` in `Mocha.Suite`. */
        slow(slow: number): ISuite;
        timeout(): number;
        /** @deprecated `.timeout()` returns `this` in `Mocha.Suite`. */
        timeout(timeout: number): ISuite;
    }

    /** Partial interface for Mocha's `Test` class. */
    /** @deprecated use `Mocha.Test` instead. */
    interface ITest extends IRunnable {
        body?: string;
        file?: string;
        /** @deprecated `.parent` has type `Mocha.Suite | undefined` in `Mocha.Test`. */
        parent?: ISuite;
        pending: boolean;
        state?: 'failed' | 'passed';
        type: 'test';
        fullTitle(): string;
    }

    /** @deprecated use `Mocha.Hook` instead. */
    interface IHook extends IRunnable {
        /** @deprecated `.ctx` has type `Mocha.Context` in `Mocha.Runnable`. */
        ctx?: IContext;
        /** @deprecated `.parent` has type `Mocha.Suite` in `Mocha.Runnable`. */
        parent?: ISuite;
        type: 'hook';
        /** @deprecated `.error()` has additional overloads in `Mocha.Hook`. */
        error(err: Error): void;
    }

    /** @deprecated use `Mocha.Context` instead. */
    interface IBeforeAndAfterContext extends IHookCallbackContext {
        /** @deprecated `.currentTest` has type `Mocha.Test` in `Mocha.Context`. */
        currentTest?: ITest;
    }

    /** @deprecated use `Mocha.Stats` instead. */
    type IStats = Stats;

    /** Partial interface for Mocha's `Runner` class. */
    /** @deprecated use `Mocha.Runner` instead. */
    interface IRunner extends NodeJS.EventEmitter {
        asyncOnly?: boolean;
        stats?: IStats;
        started: boolean;
        /** @deprecated `.suite` has type `Mocha.Suite` in `Mocha.Runner`. */
        suite: ISuite;
        total: number;
        failures: number;
        forbidOnly?: boolean;
        forbidPending?: boolean;
        fullStackTrace?: boolean;
        ignoreLeaks?: boolean;
        grep(re: RegExp, invert: boolean): this;
        /** @deprecated Parameter `suite` has type `Mocha.Suite` in `Mocha.Runner`. */
        grepTotal(suite: ISuite): number;
        /** @deprecated `.globals()` has different overloads in `Mocha.Runner`. */
        globals(arr: ReadonlyArray<string>): this | string[];
        abort(): this;
        run(fn?: (failures: number) => void): this;
    }

    /** @deprecated use `Mocha.SuiteFunction` instead. */
    interface IContextDefinition {
        /** @deprecated use `Mocha.SuiteFunction` instead. */
        (description: string, callback: (this: ISuiteCallbackContext) => void): ISuite;
        /** @deprecated use `Mocha.SuiteFunction` instead. */
        only(description: string, callback: (this: ISuiteCallbackContext) => void): ISuite;
        /** @deprecated use `Mocha.SuiteFunction` instead. */
        skip(description: string, callback: (this: ISuiteCallbackContext) => void): void;
    }

    /** @deprecated use `Mocha.TestFunction` instead. */
    interface ITestDefinition {
        /** @deprecated use `Mocha.TestFunction` instead. */
        /** @deprecated `Mocha.TestFunction` does not allow mixing `done` with a return type of `PromiseLike<any>`. */
        (expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void): ITest;
        /** @deprecated use `Mocha.TestFunction` instead. */
        /** @deprecated `Mocha.TestFunction#only` does not allow mixing `done` with a return type of `PromiseLike<any>`. */
        only(expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void): ITest;
        /** @deprecated use `Mocha.TestFunction` instead. */
        /** @deprecated `Mocha.TestFunction#skip` does not allow mixing `done` with a return type of `PromiseLike<any>`. */
        skip(expectation: string, callback?: (this: ITestCallbackContext, done: MochaDone) => PromiseLike<any> | void): void;
    }

    // #endregion
}

// #region Test interface augmentations

/**
 * Triggers root suite execution.
 *
 * - _Only available if flag --delay is passed into Mocha._
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#runWithSuite
 */
declare function run(): void;

/**
 * Execute before running tests.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#before
 */
declare var before: Mocha.HookFunction;

/**
 * Execute before running tests.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#before
 */
declare var suiteSetup: Mocha.HookFunction;

/**
 * Execute after running tests.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#after
 */
declare var after: Mocha.HookFunction;

/**
 * Execute after running tests.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#after
 */
declare var suiteTeardown: Mocha.HookFunction;

/**
 * Execute before each test case.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#beforeEach
 */
declare var beforeEach: Mocha.HookFunction;

/**
 * Execute before each test case.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#beforeEach
 */
declare var setup: Mocha.HookFunction;

/**
 * Execute after each test case.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#afterEach
 */
declare var afterEach: Mocha.HookFunction;

/**
 * Execute after each test case.
 *
 * - _Only available when invoked via the mocha CLI._
 *
 * @see https://mochajs.org/api/global.html#afterEach
 */
declare var teardown: Mocha.HookFunction;

/**
 * Describe a "suite" containing nested suites and tests.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var describe: Mocha.SuiteFunction;

/**
 * Describe a "suite" containing nested suites and tests.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var context: Mocha.SuiteFunction;

/**
 * Describe a "suite" containing nested suites and tests.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var suite: Mocha.SuiteFunction;

/**
 * Pending suite.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var xdescribe: Mocha.PendingSuiteFunction;

/**
 * Pending suite.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var xcontext: Mocha.PendingSuiteFunction;

/**
 * Describes a test case.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var it: Mocha.TestFunction;

/**
 * Describes a test case.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var specify: Mocha.TestFunction;

/**
 * Describes a test case.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var test: Mocha.TestFunction;

/**
 * Describes a pending test case.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var xit: Mocha.PendingTestFunction;

/**
 * Describes a pending test case.
 *
 * - _Only available when invoked via the mocha CLI._
 */
declare var xspecify: Mocha.PendingTestFunction;

// #endregion Test interface augmentations

// #region Reporter augmentations

// Forward declaration for `HTMLLIElement` from lib.dom.d.ts.
// Required by Mocha.reporters.HTML.
// NOTE: Mocha *must not* have a direct dependency on DOM types.
// tslint:disable-next-line no-empty-interface
interface HTMLLIElement { }

// Augments the DOM `Window` object when lib.dom.d.ts is loaded.
// tslint:disable-next-line no-empty-interface
interface Window extends Mocha.MochaGlobals { }

declare namespace NodeJS {
    // Forward declaration for `NodeJS.EventEmitter` from node.d.ts.
    // Required by Mocha.Runnable, Mocha.Runner, and Mocha.Suite.
    // NOTE: Mocha *must not* have a direct dependency on @types/node.
    // tslint:disable-next-line no-empty-interface
    interface EventEmitter { }

    // Augments NodeJS's `global` object when node.d.ts is loaded
    // tslint:disable-next-line no-empty-interface
    interface Global extends Mocha.MochaGlobals { }
}

// #endregion Reporter augmentations

// #region Browser augmentations

/**
 * Mocha global.
 *
 * - _Only supported in the browser._
 */
declare const mocha: BrowserMocha;

interface BrowserMocha extends Mocha {
    /**
     * Function to allow assertion libraries to throw errors directly into mocha.
     * This is useful when running tests in a browser because window.onerror will
     * only receive the 'message' attribute of the Error.
     *
     * - _Only supported in the browser._
     */
    throwError(err: any): never;

    /**
     * Setup mocha with the given settings options.
     *
     * - _Only supported in the browser._
     */
    setup(opts?: Mocha.Interface | MochaSetupOptions): this;
}

/**
 * Options to pass to `mocha.setup` in the browser.
 */
interface MochaSetupOptions extends Mocha.MochaOptions {
    /** @deprecated This is not used by Mocha. Use `files` instead. */
    require?: string[];
    fullTrace?: boolean;
}

// #endregion Browser augmentations

// #region Deprecations

/** @deprecated use `Mocha.Done` instead. */
type MochaDone = Mocha.Done;

/** @deprecated use `Mocha.ReporterConstructor` instead. */
type ReporterConstructor = Mocha.ReporterConstructor;

// #endregion Deprecations

declare module "mocha" {
    export = Mocha;
}

declare module "mocha/lib/ms" {
    export = milliseconds;
    /**
     * Parse the given `str` and return milliseconds.
     *
     * @see {@link https://mochajs.org/api/module-milliseconds.html}
     * @see {@link https://mochajs.org/api/module-milliseconds.html#~parse}
     */
    function milliseconds(val: string): number;

    /**
     * Format for `ms`.
     *
     * @see {@link https://mochajs.org/api/module-milliseconds.html}
     * @see {@link https://mochajs.org/api/module-milliseconds.html#~format}
     */
    function milliseconds(val: number): string;
}

declare module "mocha/lib/interfaces/common" {
    export = common;

    function common(suites: Mocha.Suite[], context: Mocha.MochaGlobals, mocha: Mocha): common.CommonFunctions;

    namespace common {
        interface CommonFunctions {
            /**
             * This is only present if flag --delay is passed into Mocha. It triggers
             * root suite execution.
             */
            runWithSuite(suite: Mocha.Suite): () => void;

            /**
             * Execute before running tests.
             */
            before(fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute before running tests.
             */
            before(name: string, fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute after running tests.
             */
            after(fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute after running tests.
             */
            after(name: string, fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute before each test case.
             */
            beforeEach(fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute before each test case.
             */
            beforeEach(name: string, fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute after each test case.
             */
            afterEach(fn?: Mocha.Func | Mocha.AsyncFunc): void;

            /**
             * Execute after each test case.
             */
            afterEach(name: string, fn?: Mocha.Func | Mocha.AsyncFunc): void;

            suite: SuiteFunctions;
            test: TestFunctions;
        }

        interface CreateOptions {
            /** Title of suite */
            title: string;

            /** Suite function */
            fn?: (this: Mocha.Suite) => void;

            /** Is suite pending? */
            pending?: boolean;

            /** Filepath where this Suite resides */
            file?: string;

            /** Is suite exclusive? */
            isOnly?: boolean;
        }

        interface SuiteFunctions {
            /**
             * Create an exclusive Suite; convenience function
             */
            only(opts: CreateOptions): Mocha.Suite;

            /**
             * Create a Suite, but skip it; convenience function
             */
            skip(opts: CreateOptions): Mocha.Suite;

            /**
             * Creates a suite.
             */
            create(opts: CreateOptions): Mocha.Suite;
        }

        interface TestFunctions {
            /**
             * Exclusive test-case.
             */
            only(mocha: Mocha, test: Mocha.Test): Mocha.Test;

            /**
             * Pending test case.
             */
            skip(title: string): void;

            /**
             * Number of retry attempts
             */
            retries(n: number): void;
        }
    }
}
