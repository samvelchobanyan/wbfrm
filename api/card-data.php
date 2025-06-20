<?php
header('Content-Type: application/json');

$delay = isset($_GET['delay']) ? (int)$_GET['delay'] : 0;

// Clamp delay to max 10 seconds just for safety
$delay = max(0, min($delay, 1));

// Simulate delay
sleep($delay);

echo json_encode([
  "total" => ["value" => 1520, "percent" => 5],
  "affiliate" => ["value" => 500, "percent" => 25]
]);