import React from "react";
import { SimpleHeader, ContainerFluid, Row, Col, Highlight } from "e-ui-react";

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
    <Highlight content={`composer require monolog/monolog`} lang="php" />
    <Highlight content={UTILITY_FILE_LOGGERFACTORY} lang="php" />
    <Highlight content={UTILITY_FILE_LOGGERUSAGE} lang="php" />
 </div>);
};