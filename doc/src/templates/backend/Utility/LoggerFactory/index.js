import React from "react";
import { SimpleHeader, Card, ContainerFluid, Row, Col, Highlight } from "e-ui-react";

const UTILITY_FILE_LOGGERFACTORY = `<?php

require_once __DIR__ . '/../../vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Formatter\LineFormatter;
use Monolog\Level;

class LoggerFactory
{
    private static ?Logger $logger = null;

    private static string $sourceFile = 'Unknown';

    private static function getLogger(): Logger {
        if (self::$logger === null) {

            $logDir = __DIR__ . '/../../logs';

            // Create logs directory if not exists
            if (!is_dir($logDir)) {
                mkdir($logDir, 0777, true);
            }

            $logger = new Logger('app');

            $handler = new StreamHandler(
                $logDir . '/app.log',
                Level::Debug
            );

            $formatter = new LineFormatter(
                "[%datetime%] [".self::$sourceFile."] [%level_name%] %message%\\n","Y-m-d H:i:s", true, true
            );

            $handler->setFormatter($formatter);

            $logger->pushHandler($handler);

            self::$logger = $logger;
        }

        return self::$logger;
    }

    public static function setSourceFile(string $file): void {
        self::$sourceFile = basename($file);
    }

    public static function debug(string $message): void {
        self::getLogger()->debug($message);
    }

    public static function info(string $message): void {
        self::getLogger()->info($message);
    }

    public static function warning(string $message): void {
        self::getLogger()->warning($message);
    }

    public static function error(string $message): void {
        self::getLogger()->error($message);
    }

    public static function critical(string $message): void {
        self::getLogger()->critical($message);
    }
}`;

const UTILITY_FILE_LOGGERUSAGE = `<?php
require __DIR__.'/../../LoggerFactory.php';

LoggerFactory::setSourceFile("anup.php");
LoggerFactory::debug("Debug message");

LoggerFactory::info("Application started");

LoggerFactory::warning("Validation warning");

LoggerFactory::error("Database connection failed");

LoggerFactory::critical("System crash");
?>`;

export const LoggerFactoryPage = () =>{
 return (<div>
    <SimpleHeader title="LoggerFactory" />
    <div className="mtop15p">
        <ContainerFluid>
        <Row>
            <Col md={12}>
                <div><b>Apache Log4php,</b> it's effectively a dead project. It has not been actively maintained for years, and many 
                users encounter compatibility issues with PHP 8.x, including PHP 8.1+. So, for PHP 8.1+, it is better to use <b>Monolog</b>.</div>
                <Card padding={15} backgroundColor="#f5f5f5">
                    <div><b>Why Monolog?</b></div>
                    <ul>
                        <li className="mtop5p">Fully compatible with PHP 8.1, 8.2, 8.3, and newer versions.</li>
                        <li className="mtop5p">PSR-3 compliant.</li>
                        <li className="mtop5p">
                            <div>Supports:</div>
                            <ul>
                                <li className="mtop5p">File logging</li>
                                <li className="mtop5p">Daily rotating logs</li>
                                <li className="mtop5p">Syslog</li>
                                <li className="mtop5p">Slack</li>
                                <li className="mtop5p">Email</li>
                                <li className="mtop5p">Database logging</li>
                                <li className="mtop5p">Elasticsearch</li>
                                <li className="mtop5p">Cloud logging services</li>
                            </ul>
                        </li>
                        <li className="mtop5p">Large community and active maintenance.</li>
                    </ul>
                </Card>
            </Col>
            <Col md={12}>
                <div className="mtop15p"><h5><b>Installation Steps:</b></h5></div>
                <ul>
                    <li className="mtop5p">
                        <div>Add the Dependency to the Backend using <code><b>composer</b></code> command -</div>
                        <Highlight content={`composer require monolog/monolog`} lang="php" />
                    </li>
                    <li className="mtop5p">
                        <div>Under <code><b>src/utils/LoggerFactory.php</b></code>, </div>
                        <div className="mtop5p">
                            <Highlight content={UTILITY_FILE_LOGGERFACTORY} lang="php" />
                        </div>
                    </li>
                    <li className="mtop5p">
                        <div className="mtop5p">
                            <div>Usage of this <code><b>LoggerFactory.php</b></code> is done as follows:</div>
                            <div className="mtop5p">
                                <Highlight content={UTILITY_FILE_LOGGERUSAGE} lang="php" />
                            </div>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
    </ContainerFluid>
    </div>
 </div>);
};