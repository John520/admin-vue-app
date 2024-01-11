<script lang="ts" setup></script>
<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition>
                <keep-alive>
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>